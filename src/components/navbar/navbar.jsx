import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar () {

return (
    <nav>
        <div>
            <Link to ="/" className="nav-option">About Me</Link>
        </div>
        <div>
            <Link to ="/projects" className="nav-option">Projects</Link>
        </div>
        <div>
            <Link to ="/contact" className="nav-option">Contact</Link>
        </div>
    </nav>
)

}