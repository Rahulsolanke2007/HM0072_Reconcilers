import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import Login from './components/Login';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/detail" element={<CardDetail/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
