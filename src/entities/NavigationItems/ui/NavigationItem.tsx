import { AppLink } from "shared/ui/AppLink/AppLink";
import { NavigationItemType } from "../model/types/NavigationItemType";

type Props = {
  item: NavigationItemType;
};

export const NavigationItem = (props: Props) => {
  const { item } = props;

  return (
    <AppLink to={item.path} theme="secondary">
      {item.text}
    </AppLink>
  );
};
