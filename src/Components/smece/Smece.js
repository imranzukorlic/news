// import React from "react";
// import axios from "axios";
// // import PostsList from "./componets/PostsList/PostsList";
// // import "./App.css";
// const BASE_URL = "https://api.quotable.io";
// const App = () => {
//   const [authors, setAuthors] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [pagination, setPagination] = React.useState({});
//   const [page, setPage] = React.useState(1);

//   function getAuthors(page) {
//     setLoading(true);
//     try {
//       axios
//         .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}&limit=15`)
//         .then((res) => {
//           // console.log(res.data);
//           setPagination({
//             page: res.data.page,
//             lastPage: res.data.totalPages,
//           });
//           setAuthors(res.data.results);
//         });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   }
//   React.useEffect(() => {
//     getAuthors(page);
//   }, [page]);
//   return (
//     <div className="card-container">
//       <button onClick={() => setPage((prev) => prev - 1)}>Back page</button>
//       Page {pagination.page} / {pagination.lastPage}
//       <button onClick={() => setPage((prev) => prev + 1)}>Next page </button>
//       {!loading ? (
//         <div>
//           {authors.map((author) => (
//             <div key={author._id}>
//               <h4>{author.name}</h4>
//               <h5>{author.description}</h5>
//               <p>{author.bio}</p>
//               <p>Quoute count: {author.quoteCount}</p>
//               <hr />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };
// // export default App;
// ////////
// function App() {
//   const [news, setNews] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [what, setWhat] = React.useState("bitcoin");
//   // const [pagination, setPagination] = React.useState({});
//   const [page, setPage] = React.useState(1);

//   const BASE_URL = "https://newsapi.org";
//   const getNews = (page) => {
//     setLoading(true);
//     try {
//       axios
//         .get(
//           `${BASE_URL}/v2/everything?q=${what}&pageSize=3&page=${page.toString()}&apiKey=fd2714cb9c9b44d6841ddf6d504519bf`
//           // "https://newsapi.org/v2/everything?q=bitcoin&pageSize=3&&apiKey=952c6b30533a4f18a5d7b3ff5a445ff5"
//         )
//         .then((res) => {
//           setNews(res.data.articles);
//         });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   };
//   React.useEffect(() => {
//     getNews(page);
//   }, [page, what]);
//   return (
//     <div className="App">
//       <Tabs variant="enclosed">
//         <TabList mb="1em">
//           <Tab onClick={() => setWhat("bitcoin")}>Bitcoin</Tab>
//           <Tab onClick={() => setWhat("apple")}>Apple</Tab>
//           <Tab onClick={() => setWhat("tesla")}>Tesla</Tab>
//           <Tab onClick={() => setWhat("sport")}>Sport</Tab>
//         </TabList>
//         <TabPanels>
//           <TabPanel>
//             {!loading ? (
//               <div>
//                 {news.map((nw, id) => (
//                   <div>
//                     <img
//                       src={nw.urlToImage}
//                       alt="slika"
//                       width="150px"
//                       height="150px"
//                     ></img>
//                     <h2>{nw.description}</h2>
//                     <h4>{nw.author}</h4>
//                     <p>{nw.content}</p>
//                     <a href={nw.url}>{nw.title}</a>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </TabPanel>
//           <TabPanel>
//             {!loading ? (
//               <div>
//                 {news.map((nw, id) => (
//                   <div>
//                     <img
//                       src={nw.urlToImage}
//                       alt="slika"
//                       width="150px"
//                       height="150px"
//                     ></img>
//                     <h2>{nw.description}</h2>
//                     <h4>{nw.author}</h4>
//                     <p>{nw.content}</p>
//                     <a href={nw.url}>{nw.title}</a>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </TabPanel>
//           <TabPanel>
//             {!loading ? (
//               <div>
//                 {news.map((nw, id) => (
//                   <div>
//                     <img
//                       src={nw.urlToImage}
//                       alt="slika"
//                       width="150px"
//                       height="150px"
//                     ></img>
//                     <h2>{nw.description}</h2>
//                     <h4>{nw.author}</h4>
//                     <p>{nw.content}</p>
//                     <a href={nw.url}>{nw.title}</a>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </TabPanel>
//           <TabPanel>
//             {!loading ? (
//               <div>
//                 {news.map((nw, id) => (
//                   <div>
//                     <img
//                       src={nw.urlToImage}
//                       alt="slika"
//                       width="150px"
//                       height="150px"
//                     ></img>
//                     <h2>{nw.description}</h2>
//                     <h4>{nw.author}</h4>
//                     <p>{nw.content}</p>
//                     <a href={nw.url}>{nw.title}</a>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//       <div className="prvi">
//         {/* <button onClick={() => setWhat("bitcoin")}>bitcoin</button>
//         <button onClick={() => setWhat("apple")}>aple</button>
//         <button onClick={() => setWhat("tesla")}>tesla</button>
//         <button onClick={() => setWhat("sport")}>sport</button> */}
//       </div>
//       <div className="drugi">
//         {/* {!loading ? (
//           <div>
//             {news.map((nw, id) => (
//               <div key={id}>
//                 <h4>{nw.title}</h4>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )} */}
//       </div>
//       <div className="treci">
//         <button onClick={() => setPage((prev) => prev - 1)}>-</button>
//         <span>pagination</span>
//         <button onClick={() => setPage((prev) => prev + 1)}>+</button>
//       </div>
//     </div>
//   );
// }
// // import Nav from "./Components/Nav/Nav";
// // import { Box, HStack } from "@chakra-ui/react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// // export default App;
//////
// import * as React from "react";
// import { Routes, Route, Link , NavLink} from "react-router-dom";
// import "./App.css";
// const App = () => {
//   return (
//     <div className="App">
//       <h1>NAV</h1>
//       <Routes>
//         <Route path="/" element={<h1>home page</h1>} />
//         <Route path="about" element={<p>about</p>} />
//       </Routes>
//     </div>
//   );
// };
// export default App;
// import React, { useState } from "react";
// import "./App.css";
// import Header from "./Components/Nav/Nav";
// // import { Grid } from "@nextui-org/react";
// // import Card5 from "./Components/Container/Container";
// // import Paginate from "./Components/Pagination/Pagination";
// import Tesla from "./Components/Axios/Tesla";
// import BusinessHeadlines from "./Components/Axios/BuisnissHedaline";
// import TechCrunch from "./Components/Axios/TechCrunch";
// import WallStreet from "./Components/Axios/WallStreet";

// const App = () => {
//   const [show, setShow] = useState("");
//   const handleTesla = () => {
//     setShow("tesla");
//   };
//   const handleBusinessHeadlines = () => {
//     setShow("headlines");
//   };
//   const handleTechCrunch = () => {
//     setShow("crunch");
//   };
//   const handleWallStreet = () => {
//     setShow("wallstreet");
//   };
//   return (
//     <>
//       <Header
//         showTesla={handleTesla}
//         showBusinessHeadlines={handleBusinessHeadlines}
//         showTechCrunch={handleTechCrunch}
//         showWallStreet={handleWallStreet}
//       />
//       {show === "tesla" && <Tesla />}
//       {show === "headlines" && <BusinessHeadlines />}
//       {show === "crunch" && <TechCrunch />}
//       {show === "wallstreet" && <WallStreet />}
//     </>
//   );
// };

// export default App;
