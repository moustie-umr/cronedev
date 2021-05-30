import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: white;
    font-family: 'Didact Gothic', 'Manrope', sans-serif;
}

h1, h2, h3, h4 {
    font-family: 'Work Sans', 'Padauk', sans-serif;
}

button {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        color: red;
    }
}

`

export default GlobalStyle;