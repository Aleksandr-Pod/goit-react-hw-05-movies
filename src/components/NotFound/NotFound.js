import { Message, ToHome } from "./NotFound-styled";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Message>Page not found</Message>
            <ToHome to="/">Go to HomePage</ToHome>
        </>)
}