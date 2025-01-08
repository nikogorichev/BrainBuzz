import cls from "./AppLink.module.scss";
import { ReactNode } from "react";
import { Link, LinkProps } from "react-router";
import { classNames } from "shared/lib/helpers/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: Props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
