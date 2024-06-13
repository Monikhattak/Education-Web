import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navber from "./Components/Navber";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
