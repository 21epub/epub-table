import { ProTableProps } from '@ant-design/pro-table'

export type AutoModePorps = {
  getRowsUrl?: string
  addRowsUrl?: string
  deleteRowUrl?: string
  deleteRowsUrl?: string
  updateRowUrl?: string
  updateRowsUrl?: string
}

export type ManualModeProps = {
  name: string
}

export type TableProps = {
  mode: 'auto' | 'manual'
  tableConfig?: ProTableProps<any, any>
  modalConfig?: any
} & AutoModePorps &
  ManualModeProps
