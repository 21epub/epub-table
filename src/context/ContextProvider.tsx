/* eslint no-unused-vars: 0 */
import React, { createContext, useReducer, useMemo } from 'react'
import { combineReducers } from '../utils/combineReducers'
import RowReducer, {
  RowInitialState,
  RowActionType
} from './reducers/RowReducer'
import ViewReducer, {
  ViewInitialState,
  ViewStateType
} from './reducers/ViewReducer'
import ColumnReducer, {
  ColumnInitialState,
  ColumnActionType
} from './reducers/ColumnReducer'

// * ------------------------------------ inter

interface ContextProviderProps {
  children: React.ReactNode
}

type DispatchActionType = RowActionType | ViewStateType | ColumnActionType
type DispatchType = {
  type: DispatchActionType
  payload?: any
}

const InitState = {
  columnState: ColumnInitialState,
  rowState: RowInitialState,
  viewState: ViewInitialState
}

// * ------------------------------------ provider

export const DispatchContext = createContext<any>({})
export const StateContext = createContext<typeof InitState>(InitState)

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
    console.log(dispatch, 66666666)
  }, [state])

  return useMemo(() => {
    console.log('render provider:', state)
    /* TODO: useing TS "as" is too violent, should write better TS for useReducer */
    return (
      <StateContext.Provider value={state as typeof InitState}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    )
  }, [state, dispatch])
}

export default ContextProvider
