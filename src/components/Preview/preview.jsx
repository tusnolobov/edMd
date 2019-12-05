import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { PreviewContainer } from './preview.styles';

export const Preview = ({ note }) => (
  <PreviewContainer>
    <ReactMarkdown source={note} />
  </PreviewContainer>
);

Preview.propTypes = {
  note: PropTypes.string,
};
