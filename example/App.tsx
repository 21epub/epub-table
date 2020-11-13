import React from 'react'
import { EpubTable } from '../src'
import styled from 'styled-components'

const WrapTable = styled.div`
  padding: 16px;
  background-color: #eee;
`

const App = () => {
  return (
    <WrapTable>
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
    </WrapTable>
  )
}

export default App
