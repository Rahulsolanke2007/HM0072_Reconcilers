import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import Login from './components/Login';
import PostAdForm from "./components/PostAddForm";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/login' element={<Login></Login>}/>
        <Route path="/detail" element={<CardDetail/>} />
        <Route path="/PostAdForm" element={<PostAdForm/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
