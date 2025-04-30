import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <main className="flex-1 p-10">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
