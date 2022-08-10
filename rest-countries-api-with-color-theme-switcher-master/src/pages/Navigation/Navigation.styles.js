import styled from "styled-components";
import {Link} from 'react-router-dom'
export const NavigationComponent  =styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width:100% ;
height:80px;
border: 1px solid grey;

`


export const NavLink = styled(Link)`
text-decoration:none;
color:#444 ;
font-size:1.5rem;
margin-left:2rem;
`