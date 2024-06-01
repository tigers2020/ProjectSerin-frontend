"use client"
import React, { useEffect, useState } from 'react';
import NavItem from '@/components/molecules/NavItem';
import {logoutUser} from "@/data/api";
import {useRouter} from "next/navigation";

const AccountNav: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const logout = () => {
        logoutUser();
        router.push('/')
    }

    return (
        <nav className="space-y-2">
            {!isLoggedIn && (
                <>
                    <NavItem href="/Account/Login" icon="UserIcon" label="Login"/>
                    <NavItem href="/Account/Register" icon="UserIcon" label="Register" />
                </>
            )}
            {isLoggedIn && (
                <NavItem href="/Account/Logout" icon="ArrowLeftOnRectangleIcon" label="logout" onClick={logout}/>
            )}
        </nav>
    );
};

export default AccountNav;
