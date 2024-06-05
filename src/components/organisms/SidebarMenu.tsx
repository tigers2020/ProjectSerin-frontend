// path/src/components/organisms/SidebarMenu.tsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // React Router의 NavLink 컴포넌트 사용
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import menuList from "@data/MenuList";

export const SidebarMenu = () => {
  // 메뉴 아이템과 연결된 아이콘을 동적으로 렌더링하기 위한 맵
  const icons = {
    HomeIcon: <HomeIcon />,
    PersonIcon: <PersonIcon />,
    ChatIcon: <ChatIcon />,
    SettingsIcon: <SettingsIcon />,
    HelpIcon: <HelpIcon />,
    InfoIcon: <InfoIcon />
  };

  return (
    <nav className="w-64 h-full bg-gray-800 text-white p-5">
      <ul>
        {menuList.map((item) => (
          <li key={item.label} className="mt-4">
            <NavLink to={item.to} className="flex items-center gap-2">
              {icons[item.icon]} {/* 아이콘을 여기에 렌더링 */}
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
