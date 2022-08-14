import React from "react";
import { Link } from "react-router-dom";

const Row = ({ id, title, body }) => {
  return (
    <tr>
      <td>
        <Link to={`/users/${id}`}>{id}</Link>
      </td>
      <td>
        {" "}
        <Link to={`/users/title/${title}`}>{title}</Link>
      </td>
      <td>{body}</td>
    </tr>
  );
};

export default Row;
