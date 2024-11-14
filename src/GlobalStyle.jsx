import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
}

:root {
    --color-red: #97090C;
    --color-yellow: #DECD13;
    --color-green: #037143;
    --color-novidades: #1E3932
  }

body{
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
    margin: 3% 0 0 5%;
}

h1{
    font-size: clamp(1.5rem, 10vw, 3rem);
}
h2, h3{
    font-size: clamp(1.2rem, 10vw, 2rem); 
}

p{
    font-size: clamp(1rem, 10vw, 1.5rem); 
}

a {
    /* color: white; */
    text-decoration: none;
}
`;