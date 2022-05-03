import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const MoviesBox = styled.ul`
margin: 0 auto;
padding: 10px;
max-width: 800px;
background-color: lightgreen;
` 
export const MoviesTitle = styled.h3`
text-align: center
`
export const MoviesItem = styled.li`
display: flex;
list-style: none;
margin: 5px 0;
// width: 100%;
`
export const Link = styled(NavLink)`
text-decoration: none;
padding: 5px;
width: 100%;
height: 100%;
border: 1px solid green;
border-radius: 5px;
background-color: yellow;
`