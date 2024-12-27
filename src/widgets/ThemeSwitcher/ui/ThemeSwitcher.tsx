import { useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button/Button";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>123</Button>;
};
