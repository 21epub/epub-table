import React, { useContext } from 'react'
import ProTable from '@ant-design/pro-table'
import { StateContext, DispatchContext } from '../context/ContextProvider'

const TableContent = () => {
  const { viewState } = useContext<{ viewState: { loading: string } }>(
    StateContext
  )
  const { columnState } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: 'changeLoading' })}>
        {viewState.loading}
      </button>
      <ProTable columns={columnState.value} />
    </React.Fragment>
  )
}

export default TableContent
