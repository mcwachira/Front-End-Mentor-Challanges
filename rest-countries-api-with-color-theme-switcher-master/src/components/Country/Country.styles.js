import styled from "styled-components";
import { Link } from "react-router-dom";

export const CountryData  =styled.div`

width:100% ;
display:flex ;
justify-content:center ;
flex-direction:column ;
margin:0 auto;


`

export const BackLink = styled(Link)`
color:inherit ;
width:10rem ;
text-decoration:none;
padding:1rem 2rem;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);

`
export const CountryDataContainer = styled.div`
width:100% ;
margin:5rem auto ;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

`

export const ImageContainer = styled.div`
width:100% ;
margin:0 3rem ;

`

export const ImageData = styled.img`
width:500px ;
height:400px ;
`

export const CountryDetails = styled.div`
width:100% ;
display:flex ;
justify-content:space-around ;
flex-direction:column ;

`

export const Details = styled.div`
width:100% ;
display:grid ;
grid-template-columns: repeat(auto-fit, minmax(100px, 250px));

gap: 2rem;

`
export const MajorDetails = styled.div`
width:100% ;

`

export const ExtraDetails =styled.div`
width:100% ;

`
export const CountryBorders = styled.div`
width:100% ;


`
export  const BordersBox = styled.button`
background:none ;
outline:none ;
color:inherit ;
border:none ;
margin:0 .5rem;
padding:1rem 1.5rem;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.1);
`