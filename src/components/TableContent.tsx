import React, { useContext } from 'react'
import ProTable from '@ant-design/pro-table'
import { StateContext, DispatchContext } from '../context/ContextProvider'

const TableContent = () => {
  const { viewState } = useContext(StateContext)
  const { columnState } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  React.useEffect(() => {
    console.log(viewState, 888888888888)
    console.log(columnState?.value)
  }, [viewState])

  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: 'changeLoading' })}>
        34{viewState?.loading}
      </button>
      <ProTable columns={columnState?.value} />
    </React.Fragment>
  )
}

export default TableContent
