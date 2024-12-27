import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/helpers/classNames/classNames";

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  CLEAR = "clear",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export const Button = (props: Props) => {
  const {
    className,
    children,
    disabled,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
  };

  const optional: string[] = [className || "", cls[theme], cls[size]];

  return (
    <button
      className={classNames(cls.button, mods, optional)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
