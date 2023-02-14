import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding:0;
}

ul {
    padding-left: 0;
}
li {
    margin-bottom: 10px;
}

h1, h2, p {
margin: 0;
    padding:0;
}

h1 {
    font-size: 40px;
    margin-bottom: 20px;
}
h2 {
    font-size: 30px;
    margin-bottom: 15px;
}

p {
    font-size: 20px;
}
`;
