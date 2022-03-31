import { createGlobalStyle } from 'styled-components';
import { HeaderNavbarProps } from './components/headers/HeaderStyle';

export default createGlobalStyle<HeaderNavbarProps>`
  :root {
    --background: #f9f9f9;
    --white: #ffffff;

    --gray-100: #fbfbfb;
    --gray-200: #f0f0f0;
    --gray-300: #B6B6B6;
    --gray-600: #929292;
    --gray-800: #545454;
    --gray-900: #424242;

    --blue-600: #4e737f;
    --blue-400: #5BC5CF;
    --blue-500: #4db3bd;

    --red-400: #f28a8a;
    --red-500: #eb8181;

    --green-200: #7CE3AC;
    --green-300: #73D09E;
    --green-600: #88c761;
    --green-700: #80bd5b;

    --text-8xl: 7em;
    --text-7xl: 6.5em;
    --text-6xl: 6em;
    --text-5xl: 5.5em;
    --text-4xl: 5em;
    --text-3xl: 4.5em;
    --text-2xl: 4rem;
    --text-xl: 3.5em;
    --text-lg: 3em;
    --text-md: 2.5em;
    --text-sm: 2em;
    --text-xs: 1.5em;

    --section-title: 5.2em;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;

    @media (max-width: 470px) {
      font-size: 50%;
    }
    @media (max-width: 400px) {
      font-size: 42.5%;
    }
    @media (max-width: 355px) {
      font-size: 40%;
    }
  }

  body {
    background-color: var(--background);
    @media (max-width: 1100px) {
      ${(props) =>
        props.isOpened
          ? {
              overflow: 'hidden',
            }
          : {}}
    }
  }

  a {
    color: inherit;
  }
`;
