import {createGlobalStyle} from "styled-components";

 const GlobalStyles = createGlobalStyle`


  @import url('https://fonts.googleapis.com/css2?family=Amethysta&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,700;1,300;1,400&family=Manrope:wght@100;200;300;400;600;700&display=swap');


  html {
   box-sizing: border-box;
  }

  a *, *::after, *::before {
   box-sizing: inherit;
  }

  body {
   font-family: 'Jost', sans-serif;
   margin: 0;
   padding: 0;
  }

  * {
   box-sizing: border-box;
  }

  a, button {
   font-family: 'Jost', sans-serif;
  }

  a {
   text-decoration: none;
   color: inherit;
  }

  ul {
   padding-inline-start: 0;
   list-style: none;
   margin-block-end: 0;
   margin-block-start: 0;
  }

  h4, h6 {
   font-family: Manrope, sans-serif;
   letter-spacing: 2px;
   
  }



 `
export default GlobalStyles