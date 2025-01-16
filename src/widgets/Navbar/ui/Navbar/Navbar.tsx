import cls from "./Navbar.module.scss";
import { HStack } from "shared/ui/Stack";
import { ThemeSwitcher } from "features/ThemeSwitcher/ui/ThemeSwitcher";
import { getNavigationItems, NavigationItem } from "entities/NavigationItems";

export const Navbar = () => {
  const navigationItems = getNavigationItems();
  return (
    <HStack className={cls.navbar} as="header" justify="between">
      <HStack as="nav" gap="16">
        {navigationItems.map((item) => (
          <NavigationItem key={item.path} item={item} />
        ))}
      </HStack>
      <ThemeSwitcher />
    </HStack>
  );
};
