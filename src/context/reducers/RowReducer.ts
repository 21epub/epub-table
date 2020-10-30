import produce from 'immer'

// * ------------------------------------ init

const RowInitialState: any = {}

// * ------------------------------------ inter

type RowStateType = {
  data?: any
}

type RowActionType = 'initList'

// * ------------------------------------ reducer

const RowReducer = (
  state = RowInitialState,
  action: { type: RowActionType; payload?: any }
) =>
  produce(state, (draft: RowStateType) => {
    switch (action.type) {
      case 'initList':
        return action.payload
      default:
        break
    }
  })

export { RowActionType, RowInitialState }

export default RowReducer
