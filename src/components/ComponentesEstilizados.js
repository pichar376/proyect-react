import React from 'react';
import styled,{css,keyframes,ThemeProvider, createGlobalStyle} from "styled-components"

export default function ComponentesEstilizados(){
  const mainColor=`#db7093`,
mainAlphaColor80=`#db709380`;

const setTransitionTime=(time)=>
`all ${time} ease-in-out`
;
const fadeIn=keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}
`;
const light ={
  color:"#222",
  bgColor:"#DDD",
}
  const dark ={
  color:"##DDD",
  bgColor:"#222",
}

const Box=styled.div`
padding:1rem;
color:${({theme})=>theme.color};
background-color:${({theme})=>theme.bgColor};
margin:1rem;`
const BoxRounded= styled(Box)` 
border-radius:1rem;

`;

const GlobalStyle=createGlobalStyle`

h2{
background-color:#fff;
padding:2rem;
color:#61dafb;
text-transform:uppercase;
}

`
const Myh3=styled.h3`
padding:2rem;
color:${({color})=>color};
color:${({color})=>color||"#000"};
text-align:center;
background-color:${mainColor};
transition:${setTransitionTime("1s")};
animation:${fadeIn} 5s ease-out;

${({isButton})=>isButton&& css`;
margin:0 auto;
max-width:50%;
border-radius:0.25rem;
cursor:pointer;
`}
;


&:hover{
  background-color:${mainAlphaColor80};
}

`;


  return(
    <>
    <GlobalStyle/>
    <h1>Styleds-Components</h1>
    <Myh3>hola soy un h3 estilizado con un componente de estilo</Myh3>
    <Myh3 color="#61dafb">hola soy un h3 estilizado con un componente de estilo</Myh3>
    <Myh3 isButton>Soy un h3 estilizado como boton</Myh3>
    <ThemeProvider theme={light}>
<Box>este es un tema light</Box>
<BoxRounded>esta es una caja redondeada ligth</BoxRounded>  
    </ThemeProvider>
<ThemeProvider theme={dark}>
<Box>este es un tema dark</Box>
<BoxRounded>esta es una caja redondeada dark</BoxRounded>  
    </ThemeProvider>

    </>
  )
}