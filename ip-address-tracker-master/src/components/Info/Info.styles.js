import styled from "styled-components";

export const InfoContainer = styled.div`
margin:0 auto;
margin-top:-5rem ;
background-color:#fff ;
border:1px solid grey ;
border-radius:1rem ;
width:50rem ;
height: 10rem;
display:grid;
grid-template-columns:repeat(4, 1fr) ;
grid-gap:1rem ;


`
export const InfoDetails =styled.div`
display:flex ;
justify-content:center ;
flex-direction:column ;
align-items:center ;
margin-top:.5rem ;
border-right:1px solid grey;
text-transform:uppercase ;
font-size:.9rem ;
color:grey;

`