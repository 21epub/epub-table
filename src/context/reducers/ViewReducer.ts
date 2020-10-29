import produce from 'immer'

// * ------------------------------------ init

export const ViewInitialState: ViewStateType = {
  loading: false,
  color: 'blue'
}

// * ------------------------------------ inter

type ViewStateType = {
  loading?: boolean
  color?: string
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
        return
      default:
        return
    }
  })

export { ViewStateType }

export default ViewReducer
