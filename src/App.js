import React from "react";
import axios from "axios";
// import Nav from "./Components/Nav/Nav";
import { Box, HStack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
      <Tabs variant="enclosed">
        <TabList mb="1em">
          <Tab onClick={() => setWhat("bitcoin")}>Bitcoin</Tab>
          <Tab onClick={() => setWhat("apple")}>Apple</Tab>
          <Tab onClick={() => setWhat("tesla")}>Tesla</Tab>
          <Tab onClick={() => setWhat("sport")}>Sport</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {!loading ? (
              <div>
                {news.map((nw, id) => (
                  <div>
                    <img
                      src={nw.urlToImage}
                      alt="slika"
                      width="150px"
                      height="150px"
                    ></img>
                    <h2>{nw.description}</h2>
                    <h4>{nw.author}</h4>
                    <p>{nw.content}</p>
                    <a href={nw.url}>{nw.title}</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </TabPanel>
          <TabPanel>
            {!loading ? (
              <div>
                {news.map((nw, id) => (
                  <div>
                    <img
                      src={nw.urlToImage}
                      alt="slika"
                      width="150px"
                      height="150px"
                    ></img>
                    <h2>{nw.description}</h2>
                    <h4>{nw.author}</h4>
                    <p>{nw.content}</p>
                    <a href={nw.url}>{nw.title}</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </TabPanel>
          <TabPanel>
            {!loading ? (
              <div>
                {news.map((nw, id) => (
                  <div>
                    <img
                      src={nw.urlToImage}
                      alt="slika"
                      width="150px"
                      height="150px"
                    ></img>
                    <h2>{nw.description}</h2>
                    <h4>{nw.author}</h4>
                    <p>{nw.content}</p>
                    <a href={nw.url}>{nw.title}</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </TabPanel>
          <TabPanel>
            {!loading ? (
              <div>
                {news.map((nw, id) => (
                  <div>
                    <img
                      src={nw.urlToImage}
                      alt="slika"
                      width="150px"
                      height="150px"
                    ></img>
                    <h2>{nw.description}</h2>
                    <h4>{nw.author}</h4>
                    <p>{nw.content}</p>
                    <a href={nw.url}>{nw.title}</a>
                  </div>
                ))}
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <div className="prvi">
        {/* <button onClick={() => setWhat("bitcoin")}>bitcoin</button>
        <button onClick={() => setWhat("apple")}>aple</button>
        <button onClick={() => setWhat("tesla")}>tesla</button>
        <button onClick={() => setWhat("sport")}>sport</button> */}
      </div>
      <div className="drugi">
        {/* {!loading ? (
          <div>
            {news.map((nw, id) => (
              <div key={id}>
                <h4>{nw.title}</h4>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )} */}
      </div>
      <div className="treci">
        <button onClick={() => setPage((prev) => prev - 1)}>-</button>
        <span>pagination</span>
        <button onClick={() => setPage((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
