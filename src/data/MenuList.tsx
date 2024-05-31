// data/MenuList.tsx
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon
} from "@heroicons/react/20/solid";

const menuList = [
  {
    label: "홈",
    icon: HomeIcon,
    to: "/Home"
  },
  {
    label: "프로필",
    icon: UserIcon,
    subMenu: [
      {
        label: "사용자 프로필",
        icon: UserIcon,
        to: "/Profile/UserProfile"
      },
      {
        label: "AI 캐릭터 프로필",
        icon: UserIcon,
        to: "/Profile/AIProfile"
      }
    ]
  },
  {
    label: "대화",
    icon: ChatBubbleLeftRightIcon,
    subMenu: [
      {
        label: "실시간 대화",
        icon: ChatBubbleLeftRightIcon,
        to: "/ChatLive/Live"
      },
      {
        label: "이전 대화 기록",
        icon: ChatBubbleLeftRightIcon,
        to: "/ChatLive/History"
      }
    ]
  },
  {
    label: "설정",
    icon: CogIcon,
    subMenu: [
      {
        label: "음성 설정",
        icon: CogIcon,
        to: "/Settings/AIConfigurations/TTS"
      },
      {
        label: "대화 설정",
        icon: CogIcon,
        to: "/Settings/AIConfigurations/LLM"
      },
      {
        label: "캐릭터 설정",
        icon: CogIcon,
        to: "/Settings/AIConfigurations/Character"
      },
      {
        label: "사용자 환경 설정",
        icon: CogIcon,
        to: "/Settings/UserPreferences"
      },
      {
        label: "시스템 설정",
        icon: CogIcon,
        to: "/System"
      }
    ]
  },
  {
    label: "도움말",
    icon: QuestionMarkCircleIcon,
    subMenu: [
      {
        label: "사용자 가이드",
        icon: QuestionMarkCircleIcon,
        to: "/Help/UserGuide"
      },
      {
        label: "FAQ",
        icon: QuestionMarkCircleIcon,
        to: "/Help/FAQ"
      }
    ]
  },
  {
    label: "소개",
    icon: InformationCircleIcon,
    subMenu: [
      {
        label: "개발자 정보",
        icon: InformationCircleIcon,
        to: "/About/DeveloperInfo"
      },
      {
        label: "프로젝트 개요",
        icon: InformationCircleIcon,
        to: "/About/ProjectOverview"
      },
      {
        label: "업데이트 내역",
        icon: InformationCircleIcon,
        to: "/About/UpdateHistory"
      }
    ]
  },
  {
    label: "계정",
    icon: InformationCircleIcon,
    to: "/Account"
  }
];

export default menuList;
