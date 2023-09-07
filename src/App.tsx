import { Fragment } from "react"
import Navbar from "./components/Navbar2"
function App() {
  const pages = ["Products", "Pricing", "Blog"];
  // const settings = ["Profile", "Account", "Dashboard"];

  return (
    <Fragment>
      <Navbar navItems={pages}></Navbar>
    </Fragment>
  )
}

export default App