import React, { useContext } from 'react';
import ProTable from '@ant-design/pro-table';
import { StateContext } from '../context/ContextProvider';

const TableContent = () => {
  const { viewState } = useContext(StateContext);

  React.useEffect(() => {
    console.log(viewState, 888888888888);
  }, [viewState]);

  return <ProTable />;
};

export default TableContent;
