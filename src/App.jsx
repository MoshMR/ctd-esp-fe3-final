import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Context/global.context";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ContextProvider>
  );
}

export default App;
