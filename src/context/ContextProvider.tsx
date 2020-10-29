import React, { createContext, useReducer, useMemo } from 'react';
import { combineReducers } from '../utils/combineReducers';
import RowReducer, { RowInitialState } from './reducers/RowReducer';
import ViewReducer, { ViewInitialState } from './reducers/ViewReducer';
import ColumnReducer, { ColumnInitialState } from './reducers/ColumnReducer';

interface ContextProviderProps {
  children: React.ReactNode;
}

export const DispatchContext = createContext<any>({});
export const StateContext = createContext<any>({});

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer<any>(
    useMemo(
      () => combineReducers({ columnReducer: ColumnReducer, rowReducer: RowReducer, viewReducer: ViewReducer }),
      [],
    ),
    { columnState: ColumnInitialState, rowState: RowInitialState, viewState: ViewInitialState },
  );

  console.log(dispatch, 33333333333333);
  console.log(state, 444444444444);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default ContextProvider;
