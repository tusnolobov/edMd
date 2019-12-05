import React, { useState } from 'react';

import { Layout } from '../components/Layout/layout';
import { Editor } from '../components/Editor/editor';
import { Preview } from '../components/Preview/preview';

const App = () => {
  const [content, setContent] = useState('');

  return (
    <Layout>
      <Editor content={content} setContent={setContent} />
      <Preview content={content} />
    </Layout>
  );
};

export default App;
