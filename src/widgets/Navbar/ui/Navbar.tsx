import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import cls from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={cls.navbar}>
       <ThemeSwitcher />
    </header>
  );
};
