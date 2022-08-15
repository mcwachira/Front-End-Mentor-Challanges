import styled from "styled-components";

export const DropDownContainer = styled.div`
width:15rem;
z-index:1 ;
cursor: pointer;
/* margin:0 auto ; */


`

export const DropDownHeader = styled.div`
width:100% ;
display: flex; 
align-items:center ;
justify-content:space-between ;
margin-bottom:1rem ;
padding:.4rem 2rem .4rem 1rem ;
box-shadow:0 2px 3px rgba(0, 0, 0, 0.15); 
font-weight:500 ;
font-size:1.1rem ;
`

export const DropDownListContainer = styled.div`

`
export const DropDownList = styled.ul`
padding:0 ;
margin:0;
padding-left:1rem ;
box-sizing:border-box ;
font-size:1.3rem ;
font-weight:500 ;
&:first-child{
    padding-top:.5rem ;
}

`

export const ListItem = styled.li`
list-style:none ;
margin-bottom:1rem ;


`