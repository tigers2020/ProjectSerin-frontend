// components/molecules/MenuItem.tsx
import { FC } from "react";
import Link from "next/link";
import { IconType } from "@heroicons/react/20/solid";

interface MenuItemProps {
  icon: IconType;
  label: string;
  to: string;
}

const MenuItem: FC<MenuItemProps> = ({ icon: IconComponent, label, to }) => {
  return (
    <Link href={to} className="flex items-center p-2 text-gray-700 hover:bg-gray-100">
        <IconComponent className="w-5 h-5 mr-2" />
        {label}
    </Link>
  );
};

export default MenuItem;
