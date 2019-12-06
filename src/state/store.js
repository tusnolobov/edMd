import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import useCombinedReducers from './use-combined-reducers';

import { currentNoteReducer } from './features/current-note/reducer';
import { previewReducer } from './features/preview/reducer';

const store = createContext(null);
const { Provider } = store;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    currentNote: useReducer(currentNoteReducer, ''),
    preview: useReducer(previewReducer, true),
  });

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { store, StoreProvider };
