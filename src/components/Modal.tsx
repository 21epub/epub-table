import React, { FC, memo } from 'react'
import styled from 'styled-components'
import { Modal as AntModal, Button } from 'antd'
import { ModalProps, ModalFuncProps } from 'antd/lib/modal'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { ModalContext } from '../context'
import { Form } from './Form'

// * ------------------------------------------------------------------------------- add

const AddModal: FC<ModalProps> = (props) => {
  const modalActions = ModalContext.reducers

  return (
    <AntModal
      {...props}
      title='添加数据'
      okText='确定'
      cancelText='取消'
      visible
      onCancel={() => modalActions.toggleModal()}
    >
      <Form />
    </AntModal>
  )
}

// * ------------------------------------------------------------------------------- update

const UpdateModal: FC<ModalProps> = (props) => {
  const modalActions = ModalContext.reducers

  return (
    <AntModal
      {...props}
      title='编辑数据'
      okText='确定'
      cancelText='取消'
      visible
      onCancel={() => modalActions.toggleModal()}
    >
      <Form />
    </AntModal>
  )
}

// * ------------------------------------------------------------------------------- delete

interface DeleteModalProps extends ModalFuncProps {
  text?: string
}

const WrapAntModal = styled(AntModal)`
  width: 416px !important;
  display: flex;
  flex-direction: column;
`

const WrapModalTitle = styled.span`
  font-size: 22px;
  svg {
    color: #faad14;
    margin-right: 16px;
  }
`

const WrapModalText = styled.div`
  margin-left: 38px;
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
`

const WrapModalButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  button:last-child {
    margin-left: 8px;
  }
`

const DeleteModal: FC<DeleteModalProps> = (props) => {
  const { title, text, icon } = props
  const modalActions = ModalContext.reducers

  return (
    <WrapAntModal
      {...props}
      closable={false}
      visible
      title={null}
      footer={null}
      style={{ width: '416px' }}
      onCancel={() => modalActions.toggleModal()}
    >
      <WrapModalTitle>
        {icon}
        {title}
      </WrapModalTitle>
      <WrapModalText>{text}</WrapModalText>
      <WrapModalButton>
        <Button key='back' onClick={() => modalActions.toggleModal()}>
          取消
        </Button>
        <Button key='submit' type='primary' loading={false} onClick={() => modalActions.toggleModal()}>
          确认
        </Button>
      </WrapModalButton>
    </WrapAntModal>
  )
}

// * ------------------------------------------------------------------------------- comp

export const Modal: FC = memo(() => {
  const [modalState] = ModalContext.useRxjsStore()

  switch (modalState?.modalType) {
    case 'add':
      return <AddModal />
    case 'update':
      return <UpdateModal />
    case 'delete':
      return (
        <DeleteModal
          title='提示'
          text='工作表数据删除后将无法恢复，是否确认删除？'
          icon={<ExclamationCircleOutlined />}
        />
      )
    default:
      return null
  }
})
