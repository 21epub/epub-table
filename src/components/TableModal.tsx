import React, { useMemo, useContext } from 'react'
import { StateContext } from '../context/ContextProvider'
import { Modal } from 'antd'

const TableModal = () => {
  const { viewState } = useContext(StateContext)

  return useMemo(() => {
    return (
      <Modal title="modal title" visible={false}>
        modal
      </Modal>
    )
  }, [viewState])
}

export default TableModal
