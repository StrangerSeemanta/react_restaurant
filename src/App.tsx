import { Fragment } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
function App() {
  const pages = ["About", "Products", "Pricing", "Contact"];
  // const settings = ["Profile", "Account", "Dashboard"];

  return (
    <Fragment>

      <Navbar navItems={pages}></Navbar>
      <Home />
      <About />

    </Fragment>
  )
}

export default App