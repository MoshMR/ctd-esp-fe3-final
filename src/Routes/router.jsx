import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
import Contact from "../Pages/Contact";
import Favs from "../Pages/Favs";
import App from "../App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favs" element={<Favs />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Route>
  )
);
