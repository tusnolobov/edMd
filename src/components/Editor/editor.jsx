import React from 'react';
import PropTypes from 'prop-types';

export const Editor = ({ state, setState }) => {
  const handleChange = event => {
    setState(event.target.value);
  };

  return (
    <>
      <textarea value={state} onChange={handleChange}></textarea>
      <style jsx>
        {`
          textarea {
            width: 50%;
            padding: 0.8rem 1rem;
            resize: none;
          }
        `}
      </style>
    </>
  );
};

Editor.propTypes = {
  state: PropTypes.string,
  setState: PropTypes.func,
};
