import React from 'react';
import PropTypes from 'prop-types';

import { Textarea } from './editor.styles';

export const Editor = ({ content, setContent }) => {
  const handleChange = event => {
    setContent(event.target.value);
  };

  return (
    <Textarea
      value={content}
      onChange={handleChange}
      spellCheck={false}
      placeholder="Start with simple # and you'll get a heading..."
    ></Textarea>
  );
};

Editor.propTypes = {
  content: PropTypes.string,
  setContent: PropTypes.func,
};
