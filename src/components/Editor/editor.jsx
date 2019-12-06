import React, { useContext, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

import { store } from '../../state/store';
import { updateCurrentNote } from '../../state/features/current-note/actions';

import { Textarea } from './editor.styles';

export const Editor = () => {
  const { state, dispatch } = useContext(store);

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const noteFromLs = window.localStorage.getItem('currentNote');

      if (typeof noteFromLs !== 'undefined') {
        dispatch(updateCurrentNote(noteFromLs));
      }
    }, []);
  }

  const handleChange = event => {
    dispatch(updateCurrentNote(event.target.value));
    console.log(state);
  };

  const debounced = useRef(
    debounce(
      updatedNote => window.localStorage.setItem('currentNote', updatedNote),
      500,
    ),
  );

  useEffect(() => {
    debounced.current(state.currentNote);
  }, [state.currentNote]);

  return (
    <Textarea
      value={state.currentNote}
      onChange={handleChange}
      spellCheck={false}
      placeholder="Start writing with # Title."
    ></Textarea>
  );
};
