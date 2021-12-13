import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Index from "../pages";
import Produtos from "../pages/Produto";
import EditProduto from "../pages/EditProduto";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Index /> },
    { path: "produto", element: <Produtos /> },
    { path: "editproduto", element: <EditProduto /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;