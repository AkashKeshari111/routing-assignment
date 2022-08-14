import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiData } from "../Api/Api";
import Row from "../components/Row";

const Users = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiData({ id })
      .then((res) => {
        setData(res);
        //  console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // console.log(id)
  return (
    <div>
      <Row id={data.id} title={data.title} body={data.body} />
    </div>
  );
};

export default Users;
