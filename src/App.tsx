import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import SchedulePage from "./SchedulePage/SchedulePage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<StartPage/>}/>
            <Route path="/schedule" element={<SchedulePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;