import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    // <div>
    //   <h1>Welcome to Toila Artspace</h1>
    // </div>
  );
}

export default App;
