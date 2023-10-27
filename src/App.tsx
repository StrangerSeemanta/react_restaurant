import { Fragment, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Offers from "./components/Offers"
import AOS from "aos";
import "aos/dist/aos.css";// import Offers from "./components/Offers";
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