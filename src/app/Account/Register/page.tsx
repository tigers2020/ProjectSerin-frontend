"use client"
import React, { useState } from 'react';
import { registerUser } from '@/data/api';
import RegisterForm from "@/components/organisms/RegisterForm"

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(name, email, password);
            alert('Registration successful.');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
       <RegisterForm />
            </div>
        </div>
    );
};

export default Register;
