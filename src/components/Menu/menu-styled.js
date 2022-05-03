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
border: 1px solid orange;
border-radius: 50%;
background-color: yellow;
`