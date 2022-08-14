import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiDataName } from "../Api/Api";
import Row from "../components/Row";

const UsersTitle = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiDataName({ title: params.title })
      .then((res) => {
        setData(res[0]);
        console.log(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.title]);

  console.log(data.title);
  return (
    <div>
      <Row id={data.id} title={data.title} body={data.body} />
    </div>
  );
};

export default UsersTitle;
