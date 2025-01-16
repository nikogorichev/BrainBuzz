import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useScreenSize } from "./providers/ScreenSizeProvider";

const App = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        {isMobile ? "Мобилка" : "Десктоп"}
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
