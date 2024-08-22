import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import ExerciesesDetails from "./page/ExerciesesDetails";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Exercieses from "./page/Exercieses";

function App() {
  return (
    <div className="app bg-zinc-100 relative">
      <Nav />
      <section className="container mx-auto ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercieses />} />
          <Route path="/exercise/:id" element={<ExerciesesDetails />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
