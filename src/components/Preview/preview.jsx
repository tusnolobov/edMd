import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import { store } from '../../state/store';

import { PreviewContainer } from './preview.styles';

export const Preview = () => {
  const { state } = useContext(store);

  return (
    <PreviewContainer preview={state.preview}>
      <ReactMarkdown source={state.currentNote} />
    </PreviewContainer>
  );
};
