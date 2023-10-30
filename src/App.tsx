import { Fragment, useEffect } from "react"
// Router

import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Offers from "./components/Offers"


// AOS LIBS
import AOS from "aos";
import "aos/dist/aos.css";

// CSS
import "./App.css"
function App() {
  const pages = ["About", "Products", "Offers", "Contact"];
  // const settings = ["Profile", "Account", "Dashboard"];
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 2000,
    });
  }, [])
  return (
    <Fragment>
      <Navbar navItems={pages}></Navbar>
      <Home />
      <About />
      <Dishes />
      <Offers />
    </Fragment>
  )
}

export default App