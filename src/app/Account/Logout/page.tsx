"use client"
import React from 'react';
import { logoutUser } from '@/data/api';

const Logout: React.FC = () => {
    const handleLogout = () => {
        logoutUser();
        alert('Logout successful.');
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
