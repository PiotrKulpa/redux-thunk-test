// fetch data from jsonplaceholder
export default (id) => fetch(`https://jsonplaceholder.typicode.com/${id}`).then(res => res.json()).then(res => res);
