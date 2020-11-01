import React, { useContext, useMemo, useState, useEffect } from 'react'
import ProTable from '@ant-design/pro-table'
import { StateContext, DispatchContext } from '../context/ContextProvider'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import { PaginationProps } from 'antd/es/pagination'
import styled from 'styled-components'

// * ------------------------------------ style

const WrapperOptions = styled.div`
  display: flex;
  align-items: center;
`

const WrapperButton = styled(Button)`
  padding-left: 0;
  padding-right: 0;
`

// * ------------------------------------ comp

const pagination: PaginationProps = {
  defaultPageSize: 10
}

const RenderBar = () => [
  <Button key='button' icon={<PlusOutlined />} type='primary'>
    新建
  </Button>
]

// * ------------------------------------ main

const TableContent = () => {
  const { columnState } = useContext(StateContext)
  const { rowState } = useContext(StateContext)
  const dispatch = useContext(DispatchContext)

  const [columns, setColumns] = useState<any>(columnState.value)

  const handleTableListModify = () => {
    dispatch({ type: {} })
  }

  const handleTableListDelete = () => {}

  const renderOptionsObject = () => {
    const ModifyAction = () => (
      <WrapperButton type='link' onClick={handleTableListModify}>
        修改
      </WrapperButton>
    )
    const DeleteAction = () => (
      <WrapperButton type='link' onClick={handleTableListDelete} danger>
        删除
      </WrapperButton>
    )

    return {
      title: '操作',
      dataIndex: 23,
      key: 'option',
      valueType: 'option',
      render: () => (
        <WrapperOptions>
          <ModifyAction />
          <Divider type='vertical' />
          <DeleteAction />
        </WrapperOptions>
      )
    }
  }

  useEffect(() => {
    setColumns(columnState.value.concat(renderOptionsObject()))
  }, [columnState.value])

  // useEffect(() => {
  //   setColumns(columnState.value)
  // }, [columnState.value])

  return useMemo(() => {
    console.log('render table content')
    return (
      <ProTable
        rowKey='id'
        dateFormatter='string'
        headerTitle='高级表格'
        pagination={pagination}
        dataSource={rowState.data}
        columns={columns}
        toolBarRender={RenderBar}
      />
    )
  }, [columnState, rowState])
}

export default TableContent
