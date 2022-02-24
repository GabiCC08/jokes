import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JokesPage from "./components/JokesPage";
import { CatchAll } from "./components/CatchAll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/jokes"} element={<JokesPage />} />
        <Route path={"/"} element={<CatchAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
