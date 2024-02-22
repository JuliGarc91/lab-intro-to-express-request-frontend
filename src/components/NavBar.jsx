import { Link } from "react-router-dom"
import SearchPoke from "./SearchPoke"

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/pokemon">See All 150 Pokemon!</Link>
        <Link to="/pokemon/search">Search Pokemon</Link>
    </nav>
  )
}

export default NavBar