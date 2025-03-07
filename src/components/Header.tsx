import {NavLink} from "react-router-dom";
import "./Header.css";

export default function Header()
{
    return (
        <header className="header">
            <h1 className="header-title">Rick and Morty Explorer</h1>
            <nav className="nav-menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/characters">Characters</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
