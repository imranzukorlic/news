import React from "react";
import axios from "axios";
import Nav from "./Components/Nav/Nav";
import "./App.css";

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [what, setWhat] = React.useState("bitcoin");
  // const [pagination, setPagination] = React.useState({});
  const [page, setPage] = React.useState(1);

  const BASE_URL = "https://newsapi.org";
  const getNews = (page) => {
    setLoading(true);
    try {
      axios
        .get(
          `${BASE_URL}/v2/everything?q=${what}&pageSize=3&page=${page.toString()}&apiKey=952c6b30533a4f18a5d7b3ff5a445ff5`
          // "https://newsapi.org/v2/everything?q=bitcoin&pageSize=3&&apiKey=952c6b30533a4f18a5d7b3ff5a445ff5"
        )
        .then((res) => {
          setNews(res.data.articles);
        });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getNews(page);
  }, [page, what]);
  return (
    <div className="App">
      <Nav news={news} />
      <div className="prvi">
        <button onClick={() => setWhat("bitcoin")}>bitcoin</button>
        <button onClick={() => setWhat("apple")}>aple</button>
        <button onClick={() => setWhat("tesla")}>tesla</button>
        <button onClick={() => setWhat("sport")}>sport</button>
      </div>
      <div className="drugi">
        {!loading ? (
          <div>
            {news.map((nw, id) => (
              <div key={id}>
                <h4>{nw.title}</h4>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="treci">
        <button onClick={() => setPage((prev) => prev - 1)}>-</button>
        <button onClick={() => setPage((prev) => prev + 1)}>+</button>
      </div>
      <h1>nice</h1>
    </div>
  );
}

export default App;
