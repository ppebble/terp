import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

interface TableProps {
  // onChangeHandler?: () => void;
  i: any[];
  data: any[];
  id: string;
  rowcount: number;
}

function TableRowComponent({ i, data, id, rowcount }: TableProps) {
  useEffect(() => {}, []);
  let member = [];
  if (data.length > 0) {
    member = data;
    console.log(member);
  }
  /*
  td는 컬럼 갯수 만큼
  */

  return (
    <>
      {/* {Array.from(i).map((item: any, index) => (
        <tr key={id}>{<td key={item[index]} />}</tr>
      ))} */}
      <tr key={id}>
        <td key={data[rowcount]}>{data[5]}</td>
      </tr>
    </>
  );
}
TableRowComponent.defaultProps = {};
TableRowComponent.propTypes = {
  length: PropTypes.number.isRequired,
};
export default TableRowComponent;
