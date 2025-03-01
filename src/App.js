import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/login' element={<Login></Login>}/>
        <Route path="/detail" element={<CardDetail/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
