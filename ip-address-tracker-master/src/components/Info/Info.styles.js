import styled from "styled-components";

export const InfoContainer = styled.div`
 max-width: 1200px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
background-color:#fff ;
border:1px solid grey ;
border-radius:1rem ;
width:60% ;
height:auto ;
grid-gap:1rem ;
z-index:20 ;
position:absolute ;
 left: 0;
  right: 0;
  margin: 0 auto;
  margin-top:-5rem ;



`
export const InfoDetails =styled.div`
display:flex ;
justify-content:center ;
flex-direction:column ;
align-items:center ;
margin-top:.5rem ;
/* border-right:1px solid grey; */
text-transform:uppercase ;
font-size:.9rem ;
color:grey;
width:100% ;
height:15vh ;
h4{
    font-size:1.2rem ;
    color: hsl(0, 0%, 17%);
}
`
export const InfoHeading  = styled.h2`
margin:1rem auto;
font-size:1rem ;

`