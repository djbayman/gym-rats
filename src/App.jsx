import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import ExerciesesDetails from "./page/ExerciesesDetails";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app container mx-auto">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciesesDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
