import RxjsStore, { RxjsStoreReducerParams } from '@21epub/react-rxjs-store'

// * ------------------------------------------------------------------------------- init

interface TableState {
  fields?: any
  dataSource?: {
    data?: any
    page: number
    success: boolean
    total: number
  }
}

const initTableState: TableState = {}

// * ------------------------------------------------------------------------------- reduc
interface TableReducers<S> extends RxjsStoreReducerParams<S> {
  setFields: (state: S, fields: any) => S
  setDataSource: (state: S, dataSource: any) => S
}

const tableReducers: TableReducers<TableState> = {
  setFields(state, fields) {
    state.fields = fields
    return state
  },
  setDataSource(state, dataSource) {
    state.dataSource = dataSource
    return state
  }
}

export const TableContext = new RxjsStore<TableState, TableReducers<TableState>>(initTableState, tableReducers)
