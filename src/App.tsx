import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import SchedulePage from "./SchedulePage/SchedulePage";
import CreatePage from "./CreatePage/CreatePage";
import EnterPage from "./EnterPage/EnterPage";
import MakePage from "./MakePage/MakePage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/:groupId/schedule" element={<SchedulePage/>}/>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/enter" element={<EnterPage />} />
          <Route path="/make" element={<MakePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;