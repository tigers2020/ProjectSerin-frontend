"use client";

import React, { useEffect, useState } from 'react';
import { fetchUser } from '@/data/api';
import { useRouter } from 'next/navigation';
import DynamicJsonDisplay from '@/components/molecules/DynamicJsonDisplay';

const AccountDetails: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await fetchUser();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, []);

    if (!user) {
        return <div><span className="loading loading-ring loading-lg"></span></div>;
    }

    const handleEdit = () => {
        router.push('/Account/Edit');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold">Account</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <h3 className="text-xl font-semibold">Persona</h3>
            <DynamicJsonDisplay data={user.persona} />
            <button onClick={handleEdit} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                Edit
            </button>
        </div>
    );
};

export default AccountDetails;
