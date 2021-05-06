import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Krona One', sans-serif;
    }

    :root{
        --primary: #0F1014;
        --secondary: #ff1842;
        --secondary-alt: #f83a5c;
        --complementary: #3AF8D6;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #1b1b1b;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--secondary-alt);
        border-radius: 50px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #e7284b;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        background-color: var(--primary);
        color: white;
    }

    button{
        padding: 10px 20px;
        margin: 10px;
        border-radius: 50px;
        outline: 0;
        border: 0;
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: white;
    }

    .div-width{
        width: 90%;
        margin: 20px auto;
        padding-top: 5rem;
    }
`

