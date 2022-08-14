import React from "react";
import Row from "./Row";

const Table = ({ data }) => {
  return (
    <table border="1px">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((postman) => {
          return <Row {...postman} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
