import { UPDATE_NOTE } from '../../action-types';

export const updateNote = content => {
  return {
    type: UPDATE_NOTE,
    payload: content,
  };
};
