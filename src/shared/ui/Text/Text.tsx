import { VStack } from "../Stack";
import cls from "./Text.module.scss";
import { classNames } from "shared/lib/helpers/classNames/classNames";

type TextTheme = "primary" | "error";
type TextAlign = "right" | "left" | "center";
type TextSize = "size_s" | "size_m" | "size_l";
type TitleTagType = "h1" | "h2" | "h3" | "p";

type Props = {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  titleTag?: TitleTagType;
};

export const Text = (props: Props) => {
  const {
    className,
    title,
    text,
    theme = "primary",
    align = "left",
    size = "size_m",
    titleTag = "p",
  } = props;

  const additionalStyles = [className, cls[theme], cls[align], cls[size]];

  
  const Title = titleTag;

  return (
    <VStack className={classNames("", {}, additionalStyles)}>
      {title && <Title className={cls.title}>{title}</Title>}
      {text && <p className={cls.text}>{text}</p>}
    </VStack>
  );
};
