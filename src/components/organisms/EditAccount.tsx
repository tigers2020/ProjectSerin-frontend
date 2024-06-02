"use client";

import React, { useEffect, useState } from 'react';
import { fetchUser, updateUser } from '@/data/api';
import FormRow from '@/components/molecules/FormRow';
import JsonEditor from '@/components/atoms/JsonEditor';
import { useRouter } from 'next/navigation';

const EditAccount: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [persona, setPersona] = useState({});
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUser();
                setUser(data);
                setName(data.name);
                setEmail(data.email);
                setPosition(data.position);
                setPersona(data.persona);
            } catch (error) {
                console.error('Failed to fetch user:', error);  // 디버그용 로그
            }
        };

        getUser();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedUser = { name, email, position, persona };
        try {
            console.log('Submitting updated user:', updatedUser);  // 디버그용 로그
            await updateUser(updatedUser);
            router.back();
        } catch (error) {
            console.error('Failed to update user:', error);  // 디버그용 로그
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Edit Account</h2>
            <FormRow
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <FormRow
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <JsonEditor
                label="Persona"
                json={persona}
                onChange={setPersona}
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                Save
            </button>
        </form>
    );
};

export default EditAccount;
