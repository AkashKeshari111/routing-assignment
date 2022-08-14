import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getApi } from "../Api/Api";
import Table from "../components/Table";

const getPage = (value) => {
  if (!value || value < 1) {
    value = 1;
  }
  return value;
};

const getSort = (value) => {
  const arr = ["ASC", "DESC", "asc", "desc"].includes(value) ? value : "ASC";
  return arr;
};

const Home = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = getPage(Number(searchParams.get("page")));
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(10);
  const initialOrder = getSort(searchParams.get("order"));
  const [order, setOrderBy] = useState(initialOrder);

  useEffect(() => {
    getApi({ page, limit, order })
      .then((res) => {
        setData(res);
        //  console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit, order]);

  useEffect(() => {
    setSearchParams({ page, order });
  }, [page, order, setSearchParams]);
  return (
    <div>
      <button onClick={() => setOrderBy(order === "ASC" ? "ASC" : "ASC")}>
        sort by Asc
      </button>
      <button onClick={() => setOrderBy(order === "DESC" ? "DESC" : "DESC")}>
        sort by Desc
      </button>
      <br />
      <select onChange={(e) => setLimit(e.target.value)}>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)} disabled={page === 10}>
        Next
      </button>
      <Table data={data} />
    </div>
  );
};

export default Home;
