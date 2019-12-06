import { UPDATE_CURRENT_NOTE } from '../../action-types';

export const updateCurrentNote = payload => {
  return {
    type: UPDATE_CURRENT_NOTE,
    payload,
  };
};
