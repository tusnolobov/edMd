import { css } from '@emotion/core';

export const GlobalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  main {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: minmax(3rem, 2fr) 3fr;
    grid-template-areas: 'editor preview preview';
    height: 90vh;
    max-width: 144rem;
    margin: 0 auto;
    padding: 0.8rem 1.6rem;
  }
`;
