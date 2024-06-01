import React from 'react';
import LoginForm from '@/components/organisms/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 bg-white shadow-md rounded">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
