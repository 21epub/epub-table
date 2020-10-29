import produce from 'immer'

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

// * ------------------------------------ inter

type ColumnStateType = {
  value: any[]
}
type ColumnActionType = 'initColumns'

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
        return
      default:
        return ColumnInitialState
    }
  })

export { ColumnActionType }

export default ColumnReducer
