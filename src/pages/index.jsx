import React from 'react';
import { StoreProvider } from '../state/store';

import { Layout } from '../components/Layout/layout';
import { Editor } from '../components/Editor/editor';
import { Preview } from '../components/Preview/preview';

const IndexPage = () => {
  return (
    <StoreProvider>
      <Layout>
        <Editor />
        <Preview />
      </Layout>
    </StoreProvider>
  );
};

export default IndexPage;
