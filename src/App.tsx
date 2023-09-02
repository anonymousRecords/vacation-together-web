import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import CreatePage from "./CreatePage/CreatePage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;