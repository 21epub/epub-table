import React from 'react'
import { EpubTable } from '../src'

const App = () => {
  return (
    <EpubTable
      mode='auto'
      name='table'
      tableConfig={{
        headerTitle: '低级表格'
      }}
      modalConfig={{}}
      // getRowsUrl={baseUrl}
      // addRowsUrl={baseUrl}
      // deleteRowUrl={baseUrl}
      // deleteRowsUrl={baseUrl}
      // updateRowUrl={baseUrl}
      // updateRowsUrl={baseUrl}
    />
  )
}

export default App
