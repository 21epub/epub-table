import produce from 'immer'

// * ------------------------------------ inter

type ViewStateType = {
  loading?: boolean
  color?: string
}
type ViewActionType = 'toggleLoading' | 'setRedColor'

// * ------------------------------------ init

export const ViewInitialState: ViewStateType = {
  loading: false,
  color: 'blue'
}

// * ------------------------------------ reducer

const ViewReducer = (
  state = ViewInitialState,
  action: { type: ViewActionType; payload?: any }
) =>
  produce(state, (draft: ViewStateType) => {
    // debugger
    switch (action.type) {
      case 'toggleLoading':
        draft.loading = !draft.loading
        return draft
      case 'setRedColor':
        draft.color = 'red'
        return draft
      default:
        return draft
    }
  })

export { ViewStateType }

export default ViewReducer
