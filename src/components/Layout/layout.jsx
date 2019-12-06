import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';

import { store } from '../../state/store';

import { Header } from '../Header/header';

export const Layout = ({ children }) => {
  const { state } = useContext(store);

  return (
    <>
      <Global
        styles={css`
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
            grid-template-columns: minmax(5rem, 2fr) minmax(10rem, 3fr);
            grid-template-rows: auto;
            ${state.preview
              ? "grid-template-areas: 'editor preview';"
              : "grid-template-areas: 'editor editor';"}
            height: 90vh;
            max-width: 144rem;
            margin: 0 auto;
            padding: 0.8rem 1.6rem;
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
