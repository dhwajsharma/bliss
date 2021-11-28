import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
