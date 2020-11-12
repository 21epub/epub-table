import React, { FC, memo } from 'react'
import ProTable, { ProTableProps } from '@ant-design/pro-table'
import { TableContext } from '../context'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Button, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

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

  const newProps = { ...ProTableInitProps, ...props }

  const handleDataUpdate = () => {}
  const handleDataDelete = () => {}

  const renderOptionsObject = () => {
    const ModifyAction = () => (
      <WrapperButton type='link' onClick={handleDataUpdate}>
        修改
      </WrapperButton>
    )
    const DeleteAction = () => (
      <WrapperButton type='link' onClick={handleDataDelete} danger>
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
    <Button key='button' icon={<PlusOutlined />} type='primary'>
      新建
    </Button>
  ]

  const col = tableState.fields?.concat(renderOptionsObject())

  return (
    <ProTable
      {...newProps}
      dateFormatter='string'
      columns={col}
      dataSource={tableState.dataSource?.data}
      toolBarRender={RenderBar}
      loading={!tableState.dataSource?.data}
      pagination={{
        pageSize: 10
      }}
    />
  )
})
