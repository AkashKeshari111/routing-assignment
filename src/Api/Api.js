export const getApi = ({ page, limit, order }) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}&_sort=id&_order=${order}`
  ).then((res) => res.json());
};

export const getApiData = ({ id }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
};

export const getApiDataName = ({ title }) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?title=${title}`
  ).then((res) => res.json());
};
