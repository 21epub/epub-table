/*
 * combine reducers, share same dispatch, use different state
 */
export const combineReducers = (reducers: any) => (
  state: any = {},
  action: any
) => {
  const newState: any = {}
  for (const key in reducers) {
    newState[key] = reducers[key](state[key], action)
  }
  return newState
}
