import produce from 'immer'

// * ------------------------------------ inter

type ColumnStateType = {
  value: any[]
}
type ColumnActionType = 'initColumns'

// * ------------------------------------ init

export const ColumnInitialState: ColumnStateType = {
  value: [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48
    }
  ]
}

// * ------------------------------------ reducer

const ColumnReducer = (
  state = ColumnInitialState,
  action: { type: ColumnActionType; payload?: any }
) =>
  produce(state, (draft: ColumnStateType) => {
    switch (action.type) {
      case 'initColumns':
        console.log(action.payload, 7777777777777)
        draft.value = action.payload
        return draft
      default:
        return ColumnInitialState
    }
  })

export { ColumnActionType }

export default ColumnReducer
