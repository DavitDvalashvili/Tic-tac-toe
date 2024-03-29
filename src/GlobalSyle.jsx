import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* makes sizing simpler */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* remove default spacing */
/* force styling of type through styling, rather than elements */

* {
  margin: 0;
  padding: 0;
  font: inherit;
  font-size: 16px;
}

/* min body height */

body {
  min-height: 100vh;
  font-family: 'Outfit', sans-serif;
  background-color: #1A2A33;
  font-weight: 500;
  letter-spacing: 0.875px;
  text-transform: uppercase;
}

/* responsive images/videos */
img,
picture,
video {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
}

button {
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.875px;
  border: none;
}
    
`;

export default GlobalStyle;
