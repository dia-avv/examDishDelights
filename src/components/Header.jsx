import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <nav className="navigation">
                <Link to="" className="logo">DishDelights</Link>
                <Link to="">Home</Link>
                <Link to="recipes">Recipes</Link>
                <Link to="favorites">My Recipes</Link>
                <Link to="about">About</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </header>
    )
}