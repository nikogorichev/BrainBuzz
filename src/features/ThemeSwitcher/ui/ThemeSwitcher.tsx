import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button } from "shared/ui/Button/Button";
import DarkIcon from "shared/assets/themeDark.svg";
import LightIcon from "shared/assets/themeLight.svg";

const iconsThemeList: Record<Theme, JSX.Element> = {
  [Theme.DARK]: <DarkIcon />,
  [Theme.LIGHT]: <LightIcon />,
};

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme="clear">
      {iconsThemeList[theme]}
    </Button>
  );
};
