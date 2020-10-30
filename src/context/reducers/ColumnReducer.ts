import produce from 'immer'

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
    // console.log(action.type, 777)
    switch (action.type) {
      case 'initColumns':
        draft.value = action.payload
        return
      default:
        break
    }
  })

export { ColumnActionType, ColumnInitialState }

export default ColumnReducer
