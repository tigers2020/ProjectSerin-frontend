"use client"
import { HomeIcon, UserIcon, LogoutIcon } from '@heroicons/react/24/solid';
import React from 'react';

type IconProps = {
    name: string;
    className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
    const icons = {
        home: HomeIcon,
        user: UserIcon,
        logout: LogoutIcon,
    };
    const IconComponent = icons[name];

    return <IconComponent className={`h-6 w-6 ${className}`} />;
};

export default Icon;
