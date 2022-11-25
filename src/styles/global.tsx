import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html, body {
        max-width: 100vw;
    }
    body {
        background: #141414;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        font-family: 'Roboto Slab', sans-serif;
        overflow-x: hidden;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
        
    }
    button {
        cursor: pointer;
    }

`

export default GlobalStyle