import produce from 'immer'

// * ------------------------------------ init

const ViewInitialState: ViewStateType = {
  loading: false,
  color: 'blue',
  value: 'sb'
}

// * ------------------------------------ inter

type ViewStateType = {
  loading?: boolean
  color?: string
  value?: string
}
type ViewActionType = 'toggleLoading' | 'setRedColor'

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
      default:
        break
    }
  })

export { ViewStateType, ViewInitialState }

export default ViewReducer
