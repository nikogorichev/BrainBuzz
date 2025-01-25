// import { createSelector } from "@reduxjs/toolkit";
import { NavigationItemType } from "../types/NavigationItemType";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

// TODO сделать через createSelector
// export const getNavigationItems = createSelector([])

export const getNavigationItems = () => {
  const navigationItemList: NavigationItemType[] = [
    { path: RoutePath.main, text: "Главная" },
    { path: RoutePath.about, text: "О сайте" },
  ];

  return navigationItemList;
};
