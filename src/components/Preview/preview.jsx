import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export const Preview = ({ state }) => (
  <article>
    <ReactMarkdown source={state} />
  </article>
);

Preview.propTypes = {
  state: PropTypes.string,
};
