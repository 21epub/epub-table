import React, { useEffect } from 'react'
import { TableProps } from './types'
import { Table } from './components/Table'
import { Modal } from './components/Modal'
import { TableContext } from './context'
import { getFields, getTableData } from './api'
// import request from './utils/request'

// * ------------------------------------------------------------------------------- comp

export const EpubTable: React.FC<TableProps> = (props) => {
  const TableProps = props.tableConfig
  const ModalProps = props.modalConfig
  const TableActions = TableContext.reducers

  useEffect(() => {
    getFields('columns').then((res) => {
      TableActions.setFields(res)
    })
    getTableData('rows').then((res) => {
      TableActions.setDataSource(res)
    })
    fetch('http://localhost:7000/api/posts', {
      method: 'GET'
    }).then((res) => {
      console.log(res, 222222222222)
    })
  }, [])

  const handlePostDataAdd = () => {
    // request.post('http://localhost:7000/api/posts', {
    //   method: 'POST',
    //   data: { title: 'svrx', author: 'x-orpheus' }
    // }).then((res) => {
    //   console.log(res, 222222222222)
    // })

    fetch('http://localhost:7000/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title: 'svrx', author: 'x-orpheus' }),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  const handlePostDataDelete = () => {}

  return (
    <>
      <button onClick={handlePostDataAdd}>add post</button>
      <button onClick={handlePostDataDelete}>delete post</button>
      <Table {...TableProps} />
      <Modal {...ModalProps} />
    </>
  )
}
