import React from 'react';
import PropTypes from 'prop-types';

export const Editor = ({ state, setState }) => {
  const handleChange = event => {
    setState(event.target.value);
  };

  return (
    <>
      <textarea
        value={state}
        onChange={handleChange}
        spellCheck={false}
        placeholder="Start with simple # and you'll get a heading..."
      ></textarea>
      <style jsx>
        {`
          textarea {
            grid-area: 'editor';
            display: block;
            padding: 1.6rem 2rem;
            font-size: 1.8rem;
            line-height: 1.5;
            border: 0;
            box-shadow: 0 0 0 1px #dadada;
            border-radius: 4px;
            transition: box-shadow 0.2s ease;
            resize: horizontal;
          }

          textarea:focus {
            box-shadow: 0 0 0 2px #46a1f4;
            outline: none;
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
