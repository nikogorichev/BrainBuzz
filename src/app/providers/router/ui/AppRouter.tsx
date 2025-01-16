import { Route, Routes } from "react-router";
import { routerConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {routerConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
