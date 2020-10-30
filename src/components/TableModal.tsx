import React, { useMemo, useContext } from 'react'
import { StateContext } from '../context/ContextProvider'
import { Modal } from 'antd'

const TableModal = () => {
  const { viewState } = useContext(StateContext)

  return useMemo(() => {
    return (
      <Modal title='modal title' visible={false}>
        44444444444444444
      </Modal>
    )
  }, [viewState])
}

export default TableModal
