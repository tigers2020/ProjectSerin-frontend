"use client";

import React, { useEffect, useState } from 'react';
import { fetchUser } from '@/data/api';
import { useRouter } from 'next/navigation';
import DynamicJsonDisplay from '@/components/molecules/DynamicJsonDisplay';
import AvatarUpload from "@/components/molecules/AvatarUpload";
import Button from "@/components/atoms/Button";

const UserProfilePage: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const checkLogin = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/account/login');
                return;
            }

            try {
                const data = await fetchUser();
                setUser(data);
            } catch (error) {
                console.error(error);
                router.push('/account/login');
            }
        };

        checkLogin();
    }, [router]);

    if (!user) {
        return <div><span className="loading loading-ring loading-lg"></span></div>;
    }

    const handleEdit = () => {
        router.push('/account/edit');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold">User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <h3 className="text-xl font-semibold">Persona</h3>
            <DynamicJsonDisplay data={user.persona} />
            <AvatarUpload userId={user.id} />
            <Button type = "submit" onClick={handleEdit}>Edit</Button>
        </div>
    );
};

export default UserProfilePage;
