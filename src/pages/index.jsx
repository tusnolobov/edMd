import React, { useState } from 'react';

import { Layout } from '../components/Layout/layout';
import { Editor } from '../components/Editor/editor';
import { Preview } from '../components/Preview/preview';

const App = () => {
  const [state, setState] = useState('');

  return (
    <Layout>
      <Editor state={state} setState={setState} />
      <Preview state={state} />
    </Layout>
  );
};

export default App;
