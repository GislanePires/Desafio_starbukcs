import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sobre from "./Components/Sobre";
import Novidades from "./Components/Novidades";
import * as S from "./GlobalStyle";

export default function App() {
  return (
    <>
    <S.GlobalStyle />
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/novidades" element={<Novidades />}/>
      <Route path="/sobre" element={<Sobre />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}