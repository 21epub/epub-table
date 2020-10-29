import React, { useContext, useEffect, useMemo } from 'react';
import 'antd/dist/antd.css';

import TableForm from './TableForm';
import TableModal from './TableModal';
import TableContent from './TableContent';
import { DispatchContext } from '../context/ContextProvider';
import { getColumns, getRows } from '../api/request';

const TableWrapper = () => {
  const dispatch = useContext(DispatchContext);

  const handleGetColumns = () => {
    getColumns('columns')
      .then((res) => res.text())
      .then((res) => {
        dispatch({ type: 'setColumns', payload: res });
      });
  };

  const handleGetRows = () => {
    getRows('rows')
      .then((res) => res.text())
      .then((res) => {
        dispatch({ type: 'setRows', payload: res });
      });
  };

  useEffect(() => {
    handleGetColumns();
    handleGetRows();
  }, []);

  return useMemo(() => {
    return (
      <React.Fragment>
        <TableForm />
        <TableModal />
        <TableContent />
      </React.Fragment>
    );
  }, [dispatch]);
};

export default TableWrapper;
