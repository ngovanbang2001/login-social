import Home from "../pages/Home/index.js";
import Login from "../pages/Login/index.js";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/login",
    exact: false,
    main: () => <Login />,
  },
];
export default routes;
