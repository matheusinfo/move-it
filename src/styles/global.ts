import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: var(--background);
        color: var(--text);
    }
    
    body, input, textarea, button {
        font: 400 1rem 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`
export default GlobalStyle