import React, { useState, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

import { Layout } from '../components/Layout/layout';
import { Editor } from '../components/Editor/editor';
import { Preview } from '../components/Preview/preview';

const App = () => {
  let initialNote = '';

  if (typeof window !== 'undefined') {
    initialNote = () => window.localStorage.getItem('note');
  }

  const [note, setNote] = useState(initialNote);

  const debounced = useRef(
    debounce(
      updatedNote => window.localStorage.setItem('note', updatedNote),
      1000,
    ),
  );

  useEffect(() => {
    debounced.current(note);
  }, [note]);

  return (
    <Layout>
      <Editor note={note} setNote={setNote} />
      <Preview note={note} />
    </Layout>
  );
};

export default App;
