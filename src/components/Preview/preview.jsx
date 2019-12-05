import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export const Preview = ({ state }) => (
  <>
    <article>
      <ReactMarkdown source={state} />
    </article>
    <style jsx>
      {`
        article {
          grid-area: 'preview';
          padding: 0 2rem;
          overflow: auto;
        }
      `}
    </style>
  </>
);

Preview.propTypes = {
  state: PropTypes.string,
};
