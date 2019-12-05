import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { PreviewContainer } from './preview.styles';

export const Preview = ({ content }) => (
  <PreviewContainer>
    <ReactMarkdown source={content} />
  </PreviewContainer>
);

Preview.propTypes = {
  content: PropTypes.string,
};
