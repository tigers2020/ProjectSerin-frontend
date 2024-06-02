"use client";

import React, { useEffect, useState } from 'react';
import { fetchUser } from '@/data/api';
import FormRow from '@/components/molecules/FormRow';
import { useRouter } from 'next/navigation';
import EditAccount from "@/components/organisms/EditAccount";

const Edit: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUser();
                setUser(data);
                setName(data.name);
                setEmail(data.email);
                setPosition(data.position);
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // 여기에 업데이트 로직을 추가하십시오.
        console.log('Updated user:', { name, email, position });
        // 업데이트가 완료되면 다시 Account 페이지로 리다이렉트합니다.
        router.push('/Account');
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-start justify-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-md bg-white shadow-md rounded p-4">
                <EditAccount />
            </div>
        </div>
    );
};

export default Edit;
