import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header/header';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <style jsx global>{`
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
          color: #152833;
        }

        main {
          display: grid;
          grid-template-columns: minmax(3rem, 1fr) 2fr;
          grid-template-areas: 'editor preview preview';
          height: 90vh;
          padding: 0 1.6rem;
        }
      `}</style>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
