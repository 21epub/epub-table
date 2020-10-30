import produce from 'immer'

// * ------------------------------------ inter

type ColumnStateType = {
  value: any[]
}
type ColumnActionType = 'initColumns'

// * ------------------------------------ init

const ColumnInitialState: ColumnStateType = {
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
    // console.log(action.type, 777)
    switch (action.type) {
      case 'initColumns':
        draft.value = action.payload
        return draft
      default:
        break
    }
  })

export { ColumnActionType, ColumnInitialState }

export default ColumnReducer
