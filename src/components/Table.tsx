import React, { FC, memo } from 'react'
import ProTable, { ProTableProps } from '@ant-design/pro-table'
import { TableContext, ModalContext } from '../context'

import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Button, Divider } from 'antd'
import { ReloadOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { Pagination } from './Pagination'

// * ------------------------------------ style

const WrapperOptions = styled.div`
  display: flex;
  align-items: center;
`

const WrapperButton = styled(Button)`
  padding-left: 0;
  padding-right: 0;
`
// * ------------------------------------------------------------------------------- init

const ProTableInitProps: ProTableProps<any, any> = {
  rowKey: 'id',
  headerTitle: '高级表格'
}

// * ------------------------------------------------------------------------------- comp

export const Table: FC = memo((props) => {
  const [tableState] = TableContext.useRxjsStore()
  const modalActions = ModalContext.reducers

  const newProps = { ...ProTableInitProps, ...props }

  const renderOptionsObject = () => {
    const ModifyAction = () => (
      <WrapperButton type='link' onClick={() => modalActions.toggleModal('update')}>
        修改
      </WrapperButton>
    )
    const DeleteAction = () => (
      <WrapperButton type='link' onClick={() => modalActions.toggleModal('delete')} danger>
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

  const RenderBar = () => [
    <Button key='button' icon={<ReloadOutlined />} type='primary' onClick={() => modalActions.toggleModal('delete')}>
      批量更新
    </Button>,
    <Button
      key='button'
      icon={<DeleteOutlined />}
      type='primary'
      danger
      onClick={() => modalActions.toggleModal('add')}
    >
      批量删除
    </Button>,
    <Button key='button' icon={<PlusOutlined />} type='primary' onClick={() => modalActions.toggleModal('delete')}>
      新建
    </Button>
  ]

  const col = tableState.fields?.concat(renderOptionsObject())

  return (
    <ProTable
      {...newProps}
      search={false}
      rowKey='id'
      rowSelection={{}}
      dateFormatter='string'
      toolBarRender={RenderBar}
      columns={col}
      loading={!tableState.dataSource?.data}
      dataSource={tableState.dataSource?.data}
      pagination={Pagination()}
    />
  )
})
