import RxjsStore, { RxjsStoreReducerParams } from '@21epub/react-rxjs-store'

// * ------------------------------------------------------------------------------- init

interface ModalState {
  modalType?: 'add' | 'update' | 'delete'
}

const initModalState: ModalState = {}

// * ------------------------------------------------------------------------------- reduc

interface ModalReducers<S> extends RxjsStoreReducerParams<S> {
  toggleModal: (state: S, payload?: 'add' | 'update' | 'delete') => S
}

const modalReducers: ModalReducers<ModalState> = {
  toggleModal(state, payload) {
    state.modalType = payload
    return state
  }
}

export const ModalContext = new RxjsStore<ModalState, ModalReducers<ModalState>>(initModalState, modalReducers)
