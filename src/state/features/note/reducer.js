import { UPDATE_NOTE } from '../../action-types';

export const noteReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NOTE:
      return {
        ...state,
        note: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
