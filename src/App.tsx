import React, { useState } from "react";
import { useRoutes } from "react-router-dom";

import "./App.scss";
import routes from "@/routes/routes";

function App() {
  const element = useRoutes(routes);
  return <div className="App">{element}</div>;
}

export default App;
