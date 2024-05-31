// components/molecules/SubMenuItem.tsx
import { FC } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Icon from "@/components/atoms/Icon";

interface SubMenuItemProps {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}

const SubMenuItem: FC<SubMenuItemProps> = ({ icon, label, children }) => {
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <DisclosureButton className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-gray-100">
            <div className="flex items-center">
              <Icon icon={icon} className="w-5 h-5 mr-2" />
              {label}
            </div>
            <ChevronDownIcon
              className={`w-5 h-5 transform transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </DisclosureButton>
          <DisclosurePanel className="pl-4">{children}</DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default SubMenuItem;
