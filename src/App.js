import axios from "axios";
import React from "react";
import "./App.css";

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [what, setWhat] = React.useState;
  // const [pagination, setPagination] = React.useState({});
  const [page, setPage] = React.useState(1);

  const BASE_URL = "https://newsapi.org/";
  const getNews = (page) => {
    setLoading(true);
    try {
      axios
        .get(
          `${BASE_URL}v2/everything?q=${what}&apiKey=952c6b30533a4f18a5d7b3ff5a445ff57&page=1&limit=3`
        )
        .then((res) => setNews(res.data.articles));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getNews(page);
  }, [page]);
  return (
    <div className="App">
      <div className="prvi">
        <button onClick={() => setWhat("bitcoin")}></button>
      </div>
      <div className="drugi">
        {!loading ? (
          <div>
            {news.map((nw) => (
              <h4>{nw.title}</h4>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="treci"></div>
      <h1>nice</h1>
    </div>
  );
}

export default App;
