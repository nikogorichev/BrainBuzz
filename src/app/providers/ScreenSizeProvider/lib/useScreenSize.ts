import { useContext } from "react";
import { ScreenSizeContext } from "./ScreenSizeContext";

export const useScreenSize = () => useContext(ScreenSizeContext);
