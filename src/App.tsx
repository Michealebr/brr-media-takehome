import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./App.css";
import Staff from "./pages/Staff";
import CreateTicket from "./pages/CreateTicket";
import TicketsPage from "./pages/TicketsPage";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <main className="ml-80 flex-1 p-10">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/staff" element={<Staff />}></Route>
          </Routes>
          <Routes>
            <Route path="/create-ticket" element={<CreateTicket />}></Route>
          </Routes>
          <Routes>
            <Route path="/ticket-page" element={<TicketsPage />}></Route>
          </Routes>
          <Routes>
            <Route path="/to-do-list" element={<ToDoList />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
