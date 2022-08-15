import styled from "styled-components";
import img from  '../../images/icon-arrow.svg'
export const SearchInput = styled.input`

width:25rem;
height:3rem;
border:none ;
outline:none ;
border-radius:10px ;
position:relative ;
display:flex ;
color:grey ;
font-size: 1.3rem;
margin:5rem 0 ;

`

export const SearchButton = styled.button`
background:url ('${img}') ;
background-color:#555 ;
padding:1rem 1.5rem ;
position: absolute;
margin-top: 4rem;
margin-right:13rem ;
align-self:flex-end ;
border-radius:10px ;
outline:none ;
`

