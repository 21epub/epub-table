import produce from 'immer'

// * ------------------------------------ init

const ViewInitialState: ViewStateType = {
  loading: false,
  color: 'blue',
  value: 'sb',
  modal: {
    show: false
  }
}

// * ------------------------------------ inter

type ViewStateType = {
  loading?: boolean
  color?: string
  value?: string
  modal: {
    show: boolean
    mode?: 'add' | 'change' | 'remove' | 'removeMulti'
  }
}
type ViewActionType = 'toggleLoading' | 'setRedColor' | 'toggleModal'

// * ------------------------------------ reducer

const ViewReducer = (
  state = ViewInitialState,
  action: { type: ViewActionType; payload?: any }
) =>
  produce(state, (draft: ViewStateType) => {
    switch (action.type) {
      case 'toggleLoading':
        draft.loading = !draft.loading
        return
      case 'setRedColor':
        draft.color = 'red'
        draft.value = 'red'
        return
      case 'toggleModal':
        draft.modal.show = !draft.modal.show
        draft.modal.mode = action.payload
        return
      default:
        break
    }
  })

export { ViewStateType, ViewInitialState }

export default ViewReducer
