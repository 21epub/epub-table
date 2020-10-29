import produce from 'immer'

// * ------------------------------------ init

export const RowInitialState: RowStateType = {}

// * ------------------------------------ inter

type RowStateType = any

type RowActionType = 'initList'

// * ------------------------------------ reducer

const RowReducer = (
  state = RowInitialState,
  action: { type: RowActionType; payload?: any }
) =>
  produce(state, (draft: RowStateType) => {
    switch (action.type) {
      case 'initList':
        draft.data = action.payload
        return
      default:
        return
    }
  })

export { RowActionType }

export default RowReducer
