import cls from "./Text.module.scss";
import { classNames } from "shared/lib/helpers/classNames/classNames";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export enum TextSize {
  M = "size_m",
  L = "size_l",
}

type Props = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  size?: TextSize;
};

export const Text = (props: Props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
  } = props;

  const additionalStyles = [className, cls[theme], cls[size]];

  return (
    <div className={classNames(cls.wrapper, {}, additionalStyles)}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
