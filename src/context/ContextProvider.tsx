import React, { createContext, useReducer, useMemo } from 'react'
import { combineReducers } from '../utils/combineReducers'
import RowReducer, { RowInitialState } from './reducers/RowReducer'
import ViewReducer, { ViewInitialState } from './reducers/ViewReducer'
import ColumnReducer, { ColumnInitialState } from './reducers/ColumnReducer'

interface ContextProviderProps {
  children: React.ReactNode
}

interface IState {
  columnState: typeof ColumnInitialState
  rowState: typeof RowInitialState
  viewState: typeof ViewInitialState
}

export const DispatchContext = createContext<any>({})
export const StateContext = createContext<any>({})

const ContextProvider: React.FC<ContextProviderProps> = (props) => {
  const { children } = props

  const [state, dispatch] = useReducer<any>(
    useMemo(
      () =>
        combineReducers({
          columnState: ColumnReducer,
          rowState: RowReducer,
          viewState: ViewReducer
        }),
      []
    ),
    {
      columnState: ColumnInitialState,
      rowState: RowInitialState,
      viewState: ViewInitialState
    }
  )

  React.useEffect(() => {
    console.log(state, 55555555555)
  }, [state])

  return useMemo(() => {
    console.log('render provider')
    console.log(state)
    // console.log(state.viewState, 45454545)
    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    )
  }, [state, dispatch])
}

export default ContextProvider
