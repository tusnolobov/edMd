import React from 'react';

import { Layout } from '../Layout/layout';
import { Editor } from '../Editor/editor';
import { Preview } from '../Preview/preview';

export const App = () => (
  <Layout>
    <Editor />
    <Preview />
  </Layout>
);
