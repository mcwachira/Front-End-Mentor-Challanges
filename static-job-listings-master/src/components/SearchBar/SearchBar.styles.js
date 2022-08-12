import styled from 'styled-components'

export const SearchContainer = styled.div`
width:50% ;
height:3rem ;
margin:0 auto;
outline:none;
border:none ;
border-radius:5px ;
position:absolute;
left:25% ;
margin:1rem 0  ;
margin-bottom:2rem ;
display:flex;
align-items:center ;
box-shadow: 2px 0px 4px 3px rgba(0,0,0,0.29);
-webkit-box-shadow: 2px 0px 4px 3px rgba(0,0,0,0.29);
-moz-box-shadow: 2px 0px 4px 3px rgba(0,0,0,0.29);
`
export const SearchValue = styled.button`
display: flex;
font-size:.9rem ;
align-items:center ;
margin:0 .5rem ;
background-color: hsl(180, 31%, 95%) ;
color:hsl(180, 8%, 52%);

`

export const ClearSearchButton = styled.button`
/* margin:0 .5rem ; */

outline:none ;
border:none ;
margin:0 auto;
margin-right: 0;

`