import React, { useContext } from 'react'
import ProTable from '@ant-design/pro-table'
import { StateContext } from '../context/ContextProvider'
// import { StateContext, DispatchContext } from '../context/ContextProvider'

const TableContent = () => {
  const { columnState } = useContext(StateContext)
  const { rowState } = useContext(StateContext)
  // const dispatch = useContext(DispatchContext)

  return (
    <React.Fragment>
      <ProTable columns={columnState.value} dataSource={rowState?.data?.data} />
    </React.Fragment>
  )
}

export default TableContent
