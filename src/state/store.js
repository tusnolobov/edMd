import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import useCombinedReducers from './use-combined-reducers';

import { noteReducer } from './features/note/reducer';

const store = createContext(null);
const { Provider } = store;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    note: useReducer(noteReducer, ''),
  });

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { store, StoreProvider };
