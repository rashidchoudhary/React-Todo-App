import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";

function App() {
  React.useEffect(() => {
		if (!localStorage.getItem("users")) {
			localStorage.setItem("users", JSON.stringify([]));
		}
	});
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;