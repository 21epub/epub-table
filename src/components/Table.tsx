import React, { useMemo } from 'react'
import 'antd/dist/antd.css'

import ContextProvider from '../context/ContextProvider'
import TableWrapper from './TableWrapper'

const ProviderWrapper = () => {
  return useMemo(() => {
    return (
      <ContextProvider>
        <TableWrapper />
      </ContextProvider>
    )
  }, [])
}

export default ProviderWrapper
