import { NavMenu } from "./menu-styled";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <NavMenu>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
        </NavMenu>
    )
} 