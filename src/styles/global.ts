import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --white: #FFFFFF;

    --background: #1E1E1E;
    --primary: #F24E1E;
    --gray-light: #A2A2A6;
    --secundary: #F5C518;
  }

  @media (max-width: 1080px) {
    html{
      font-size: 93.75;
    }
  }

  @media (max-width: 720px) {
    html{
      font-size: 87.5;
    }
  }

  body{
    background: var(--background);
    color: var(--gray-light);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .appContainer{
    display: flex;
  }
`