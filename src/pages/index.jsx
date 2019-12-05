import React from 'react';
import { StoreProvider } from '../state/store';
import { App } from '../components/App/app';

const IndexPage = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};

export default IndexPage;
