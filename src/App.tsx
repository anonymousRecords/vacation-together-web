import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import SchedulePage from "./SchedulePage/SchedulePage";
import CreatePage from "./CreatePage/CreatePage";
import EnterPage from "./EnterPage/EnterPage";
import MakePage from "./MakePage/MakePage";
import CompletePage from "./CompletePage/CompletePage";
import CopyrightPage from "./Copyright/CopyrightPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/:groupId/schedule" element={<SchedulePage/>}/>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/enter/:id" element={<EnterPage />} />
          <Route path="/make" element={<MakePage/>}/>
          <Route path="/complete" element={<CompletePage/>}/>
          <Route path="/copyright" element={<CopyrightPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;