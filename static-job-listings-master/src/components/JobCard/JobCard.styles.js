import styled from "styled-components";

export const JobContainer = styled.div`
display:grid ;
grid-template-columns:repeat(2,1fr) ;
gap:5rem;
width:80% ;
height:20vh ;
margin:2rem auto;
background-color:white ;
align-items:center ;
box-shadow: 2px 0px 4px 3px rgba(0,0,0,0.29);
-webkit-box-shadow: 2px 0px 4px 3px rgba(0,0,0,0.29);
-moz-box-shadow: 2px 0px 4px 3px rgba(0,0,0,0.29);
`

export const JobDetails = styled.div`
display:grid ;
grid-template-columns:repeat(2,1fr) ;
width:100% ;
gap:1rem ;
margin-left:1rem ;
/* justify-items:start */
/* justify-content:space-between ;
align-items:center ; */

`

export const JobImage = styled.div`
display:flex ;
 justify-content:space-between ;
align-items:center 

`
export const JobDetailsBody = styled.div`
display:flex ;
flex-direction:column ;
/* align-items: center; */
`
export const JobDetailsHeader = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
font-size:.8rem ;
margin-left:1rem

`
export const JobDetailsFooter = styled.ul`
font-size:.8rem ;
display:flex ;
justify-content:space-between ;
align-items: center;
`
export const LanguageDetails = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
`

export const Language = styled.button`
margin:0 .5rem ;
background-color: hsl(180, 31%, 95%) ;
color:hsl(180, 8%, 52%);
`