import React, { useContext, useEffect, useRef } from 'react';
import debounce from 'lodash.debounce';

import { updateNote } from '../../state/features/note/actions';
import { store } from '../../state/store';

import { Textarea } from './editor.styles';

export const Editor = () => {
  const { state, dispatch } = useContext(store);

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const noteFromLs = window.localStorage.getItem('note');

      if (typeof noteFromLs !== 'undefined') {
        dispatch(updateNote(noteFromLs));
      }
    }, []);
  }

  const handleChange = event => {
    dispatch(updateNote(event.target.value));
    console.log(state);
  };

  const debounced = useRef(
    debounce(
      updatedNote => window.localStorage.setItem('note', updatedNote),
      500,
    ),
  );

  useEffect(() => {
    debounced.current(state.note);
  }, [state.note]);

  return (
    <Textarea
      value={state.note}
      onChange={handleChange}
      spellCheck={false}
      placeholder="Start with simple # and you'll get a heading..."
    ></Textarea>
  );
};
