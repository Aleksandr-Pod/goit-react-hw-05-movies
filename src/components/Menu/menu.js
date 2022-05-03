import { NavMenu, Link } from "./menu-styled";


export default function Menu() {
    return (
        <NavMenu>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
        </NavMenu>
    )
} 