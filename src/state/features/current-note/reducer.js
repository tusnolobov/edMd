import { UPDATE_CURRENT_NOTE } from '../../action-types';

export const currentNoteReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_NOTE:
      return action.payload;
    default:
      return state;
  }
};
