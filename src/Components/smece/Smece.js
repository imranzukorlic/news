import React from "react";
import axios from "axios";
// import PostsList from "./componets/PostsList/PostsList";
// import "./App.css";
const BASE_URL = "https://api.quotable.io";
const App = () => {
  const [authors, setAuthors] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [pagination, setPagination] = React.useState({});
  const [page, setPage] = React.useState(1);

  function getAuthors(page) {
    setLoading(true);
    try {
      axios
        .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}&limit=15`)
        .then((res) => {
          // console.log(res.data);
          setPagination({
            page: res.data.page,
            lastPage: res.data.totalPages,
          });
          setAuthors(res.data.results);
        });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    getAuthors(page);
  }, [page]);
  return (
    <div className="card-container">
      <button onClick={() => setPage((prev) => prev - 1)}>Back page</button>
      Page {pagination.page} / {pagination.lastPage}
      <button onClick={() => setPage((prev) => prev + 1)}>Next page </button>
      {!loading ? (
        <div>
          {authors.map((author) => (
            <div key={author._id}>
              <h4>{author.name}</h4>
              <h5>{author.description}</h5>
              <p>{author.bio}</p>
              <p>Quoute count: {author.quoteCount}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default App;
