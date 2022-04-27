import { NavMenu } from "./menu-styled";
import { Link, Outlet } from "react-router-dom";

export default function Menu() {
    return (
        <NavMenu>
            <Link to="One">One</Link>
            <Link to="Two">Two</Link>
            <Link to="Three">Three</Link>
            <Outlet/>
        </NavMenu>
    )
} 