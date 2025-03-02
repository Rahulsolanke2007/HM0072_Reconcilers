import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CardDetail from "./components/CardDetail";
import Login from './components/Login';
import PostAdForm from "./components/PostAddForm";
import UserProfile from './pages/UserProfile';
import UserPosts from "./components/UserPosts";

function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/login' element={<Login></Login>}/>
        <Route path="/detail" element={<CardDetail/>} />
        <Route path="/post-ad" element={<PostAdForm/>} />
        <Route path="/user-profile" element={<UserProfile/>} />
        <Route path="/my-posts" element={<UserPosts/>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
