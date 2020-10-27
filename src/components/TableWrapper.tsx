import React from 'react';
import TableForm from './TableForm';
import TableModal from './TableModal';
import TableContext from './TableContext';

const TableWrapper = () => {
  return (
    <React.Fragment>
      <TableForm />
      <TableModal />
      <TableContext />
    </React.Fragment>
  );
};

export default TableWrapper;
