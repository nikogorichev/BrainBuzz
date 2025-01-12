import { useScreenSize } from "app/providers/ScreenSizeProvider";
import { FlexProps } from "../Flex/Flex";
import { VStack } from "../VStack/VStack";
import { HStack } from "../HStack/HStack";

type Props = Omit<FlexProps, "direction">;

export const ResponsiveStack = (props: Props) => {
  const { isMobile } = useScreenSize();
  const Component = isMobile ? VStack : HStack;

  return <Component {...props} />;
};
