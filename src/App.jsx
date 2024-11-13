import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route />
      <Route />
      <Route />
    </Routes>
    </BrowserRouter>
    </>
  );
}