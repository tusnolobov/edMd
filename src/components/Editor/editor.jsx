import React from 'react';
import PropTypes from 'prop-types';

import { Textarea } from './editor.styles';

export const Editor = ({ note, setNote }) => {
  const handleChange = event => {
    setNote(event.target.value);
  };

  return (
    <Textarea
      value={note}
      onChange={handleChange}
      spellCheck={false}
      placeholder="Start with simple # and you'll get a heading..."
    ></Textarea>
  );
};

Editor.propTypes = {
  note: PropTypes.string,
  setNote: PropTypes.func,
};
