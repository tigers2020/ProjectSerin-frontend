"use client";

import React, {useState} from 'react';
import {registerUser} from '@/data/api';
import FormRow from '../molecules/FormRow';
import {useRouter} from "next/navigation";

const RegisterForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords don\'t match\n {password}\n {confirmPassword}');
            setError('Passwords do not match.');
            return;
        }

        try {
            await registerUser(name, email, password);
            alert('Registration successful.');
            router.push('/Account'); // Redirect to the ChatLive/Live page

        } catch (error) {
            console.error('Error registering user:', error);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
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
            <FormRow
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <FormRow
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Register
            </button>
        </form>
    );
};

export default RegisterForm;
