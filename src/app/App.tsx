import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
