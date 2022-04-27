import Menu from "./Menu/menu";
import { Outlet } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <Menu />
            <hr/>
            <Outlet/>
        </>
    )
}