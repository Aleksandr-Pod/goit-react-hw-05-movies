import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavMenu = styled.div`
display: flex;
margin: 10px auto;
justify-content: center;
`
export const Link = styled(NavLink)`
text-decoration: none;
text-align: center;
padding: 10px;
width: 160px;
height: 100%;
font-size: 24px;
&:hover {
   color: red;
   font-weight: 700;
}
&.active {
    background-color: yellow;
}
`
