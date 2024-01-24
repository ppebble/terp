import Table from 'react-bootstrap/Table';
import React from 'react';

type TableProps = {
  children: React.ReactNode;
  col: any[];
};

function TableComponent({ children, col }: TableProps) {
  return (
    <Table responsive>
      <thead>
        <tr>
          {Array.from({ length: col.length }).map((_, index) => (
            <th key={col[index]}>{col[index].name} </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}

export default TableComponent;
