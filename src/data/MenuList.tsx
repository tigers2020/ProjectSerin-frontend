import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import React from "react";

export interface MenuItem {
  label: string;
  icon: React.ElementType;  // Material-UI 아이콘 컴포넌트
  to?: string;
  subMenu?: MenuItem[];
}

export const menuList: MenuItem[] = [
  {
    label: "홈",
    icon: HomeIcon,
    to: "/Home"
  },
  {
    label: "프로필",
    icon: PersonIcon,
    subMenu: [
      {
        label: "사용자 프로필",
        icon: PersonIcon,
        to: "/Profile/UserProfile"
      },
      {
        label: "AI 캐릭터 프로필",
        icon: PersonIcon,
        to: "/Profile/AIProfile"
      }
    ]
  },
  {
    label: "대화",
    icon: ChatIcon,
    subMenu: [
      {
        label: "실시간 대화",
        icon: ChatIcon,
        to: "/ChatLive/Live"
      },
      {
        label: "이전 대화 기록",
        icon: ChatIcon,
        to: "/ChatLive/History"
      }
    ]
  },
  {
    label: "설정",
    icon: SettingsIcon,
    subMenu: [
      {
        label: "음성 설정",
        icon: SettingsIcon,
        to: "/Settings/AIConfigurations/TTS"
      },
      {
        label: "대화 설정",
        icon: SettingsIcon,
        to: "/Settings/AIConfigurations/LLM"
      },
      {
        label: "캐릭터 설정",
        icon: SettingsIcon,
        to: "/Settings/AIConfigurations/Character"
      },
      {
        label: "사용자 환경 설정",
        icon: SettingsIcon,
        to: "/Settings/UserPreferences"
      },
      {
        label: "시스템 설정",
        icon: SettingsIcon,
        to: "/System"
      }
    ]
  },
  {
    label: "도움말",
    icon: HelpIcon,
    subMenu: [
      {
        label: "사용자 가이드",
        icon: HelpIcon,
        to: "/Help/UserGuide"
      },
      {
        label: "FAQ",
        icon: HelpIcon,
        to: "/Help/FAQ"
      }
    ]
  },
  {
    label: "소개",
    icon: InfoIcon,
    subMenu: [
      {
        label: "개발자 정보",
        icon: InfoIcon,
        to: "/About/DeveloperInfo"
      },
      {
        label: "프로젝트 개요",
        icon: InfoIcon,
        to: "/About/ProjectOverview"
      },
      {
        label: "업데이트 내역",
        icon: InfoIcon,
        to: "/About/UpdateHistory"
      }
    ]
  },
  {
    label: "계정",
    icon: InfoIcon,
    to: "/Account"
  }
];

export default menuList;
