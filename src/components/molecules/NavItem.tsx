import React from 'react';
import Link from 'next/link';
import HeroIcon from '@/components/atoms/HeroIcon';
import { IconName } from '@/types/Icon';

type NavItemProps = {
    href?: string;
    icon: IconName;
    label: string;
    onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, onClick }) => {
    const content = (
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
            <HeroIcon name={icon} className="h-6 w-6" />
            <span>{label}</span>
        </div>
    );

    return onClick ? (
        <button onClick={onClick} className="w-full text-left">
            {content}
        </button>
    ) : (
        <Link href={href ?? "#"} className="w-full">
            {content}
        </Link>
    );
};

export default NavItem;
