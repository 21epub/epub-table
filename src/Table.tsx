import React, { useEffect } from 'react'
import { TableProps } from './types'
import { Table } from './components/Table'
import { Modal } from './components/Modal'
import { TableContext } from './context'
import { getFields, getTableData } from './api'

const baseUrl = 'https://yapi.epub360.com/mock/104/v1/api/tables/11111/'

// * ------------------------------------------------------------------------------- comp

export const EpubTable: React.FC<TableProps> = (props) => {
  const TableProps = props.tableConfig
  const ModalProps = props.modalConfig
  const TableActions = TableContext.reducers

  useEffect(() => {
    getFields(baseUrl + 'fields').then((res) => {
      TableActions.setFields(res)
    })
    getTableData(baseUrl + 'data/').then((res) => {
      TableActions.setDataSource(res)
    })
  }, [])

  return (
    <>
      <Table {...TableProps} />
      <Modal {...ModalProps} />
    </>
  )
}
