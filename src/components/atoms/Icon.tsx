// components/atoms/Icon.tsx
import { FC } from "react";

interface IconProps {
  icon: React.ElementType;
  className?: string;
}

const Icon: FC<IconProps> = ({ icon: IconComponent, className }) => {
  return <IconComponent className={className} />;
};

export default Icon;
