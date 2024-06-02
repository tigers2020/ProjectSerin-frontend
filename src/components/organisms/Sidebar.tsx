import { FC } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import menuList from "@/data/MenuList";
import MenuItem from "@/components/molecules/MenuItem";

const Sidebar: FC = () => {
  return (
    <div className="bg-white w-64 h-full shadow-md p-4 h-dvh">
      {menuList.map((item, index) => {
        const IconComponent = item.icon;

        return item.subMenu ? (
          <Disclosure as="div" key={index} className="mt-2" defaultOpen={false}>
            <DisclosureButton className="group flex w-full items-center justify-between p-2 text-left text-gray-700 hover:bg-gray-100">
              <div className="flex items-center">
                <IconComponent className="w-5 h-5 mr-2" />
                <span>{item.label}</span>
              </div>
              <ChevronDownIcon className="w-5 h-5 transform transition-transform group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="pl-4">
              {item.subMenu.map((subItem, subIndex) => {
                const SubIconComponent = subItem.icon;
                return (
                  <MenuItem
                    key={subIndex}
                    icon={SubIconComponent}
                    label={subItem.label}
                    to={subItem.to}
                  />
                );
              })}
            </DisclosurePanel>
          </Disclosure>
        ) : (
          <MenuItem key={index} icon={IconComponent} label={item.label} to={item.to} />
        );
      })}
    </div>
  );
};

export default Sidebar;
