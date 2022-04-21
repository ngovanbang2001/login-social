import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./config/Routes.js";
import Header from "./component/Header/index";
import { useEffect, useState } from "react";
import AuthProvider from "./context/AuthProvider.js";
function App() {
  const [user, setUser] = useState(null);

  console.log(user);
  const pages = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return result;
  };
  return (
    <Router>
      <AuthProvider>
        <Header user={user} />
        <Switch>{pages(routes)}</Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
