import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;