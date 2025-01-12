import { ReactNode, useEffect, useState } from "react";
import { ScreenSizeContext } from "../lib/ScreenSizeContext";

type Props = {
  children: ReactNode;
};

const MOBILE_WIDTH = 768;

const ScreenSizeProvider = (props: Props) => {
  const { children } = props;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_WIDTH);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
