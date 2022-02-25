import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JokesPage from "./components/JokesPage";
import { CatchAll } from "./components/CatchAll";
import TestPage from "./components/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/test"} element={<TestPage />} />
        <Route path={"/jokes"} element={<JokesPage />} />
        <Route path={"/"} element={<CatchAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
