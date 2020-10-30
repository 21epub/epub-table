import produce from 'immer'

// * ------------------------------------ inter

type RowStateType = any

type RowActionType = 'initList'
// * ------------------------------------ init

export const RowInitialState: RowStateType = {}

// * ------------------------------------ reducer

const RowReducer = (
  state = RowInitialState,
  action: { type: RowActionType; payload?: any }
) =>
  produce(state, (draft: RowStateType) => {
    switch (action.type) {
      case 'initList':
        draft.data = action.payload
        return draft
      default:
        return draft
    }
  })

export { RowActionType }

export default RowReducer
