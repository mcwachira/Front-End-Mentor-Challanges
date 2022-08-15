import styled from "styled-components";
import {Link} from 'react-router-dom'


export const NavigationComponent  =styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width:100% ;
height:80px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
margin-bottom:3rem ;

`


export const NavLink = styled(Link)`
  list-style: none;
  text-decoration: none;
font-size:1.5rem;
margin-left:2rem;
color:inherit ;
`

export const NavIconButtons = styled.div`
cursor:pointer ;
`