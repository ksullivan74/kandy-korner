import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar_item">
               <Link className="navar_link" to="/locations">Locations</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar_link" to="/products">Candies</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}

