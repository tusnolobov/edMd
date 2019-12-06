import { TOGGLE_PREVIEW } from '../../action-types';

export const previewReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_PREVIEW:
      return !state;
    default:
      return state;
  }
};
