import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment/Payment";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/checkout"
          element={[<Header />, <Checkout />, <Footer />]}
        ></Route>
        <Route
          path="/payment"
          element={[<Header />, <Payment />, <Footer />]}
        ></Route>
        <Route
          path="/productPage"
          element={[<Header />, <ProductPage />, <Footer />]}
        ></Route>
        <Route path="/" element={[<Header />, <Home />, <Footer />]}></Route>
      </Routes>
    </div>
  );
}

export default App;
