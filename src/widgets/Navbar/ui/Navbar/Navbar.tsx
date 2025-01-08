import cls from "./Navbar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

export const Navbar = () => {
  return (
    <header className={cls.navbar}>
       <ThemeSwitcher />
       
    </header>
  );
};
