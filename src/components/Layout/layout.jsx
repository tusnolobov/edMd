import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';

import { Header } from '../Header/header';

import { GlobalStyles } from './layout.styles';

export const Layout = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
