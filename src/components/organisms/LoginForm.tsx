"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/data/api';
import useSocket from '@/data/useSocket';
import FormRow from '@/components/molecules/FormRow';
import Button from '@/components/atoms/Button';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Use the useSocket hook to connect to the socket server
    useSocket(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            if (response.data && response.data.access_token) {
                localStorage.setItem('token', response.data.access_token);
                alert('Login successful.');
                router.push('/ChatLive/Live'); // Redirect to the ChatLive/Live page
            } else {
                alert('Login failed.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormRow
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormRow
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
