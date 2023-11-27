import { Fragment, useEffect } from "react"
// Router

import Home from "./components/Home";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Offers from "./components/Offers"


// AOS LIBS
import AOS from "aos";
import "aos/dist/aos.css";

// CSS
import "./App.css"
import Footer from "./components/Footer";
function App() {
  // const settings = ["Profile", "Account", "Dashboard"];
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 2000,
    });
  }, [])
  return (
    <Fragment>
      <Home />
      <About />
      <Dishes />
      <Offers />
      <Footer />
    </Fragment>
  )
}

export default App