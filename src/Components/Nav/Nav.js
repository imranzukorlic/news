// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import React from "react";

// const Nav = () => {
//   return (
//     <Tabs isFitted variant="enclosed">
//       <TabList mb="1em">
//         <Tab>Bitcoin</Tab>
//         <Tab>Apple</Tab>
//         <Tab>Tesla</Tab>
//         <Tab>Sport</Tab>
//       </TabList>
//       <TabPanels>
//         <TabPanel>
//           <p>Bitcoin</p>
//         </TabPanel>
//         <TabPanel>
//           <p>Apple</p>
//         </TabPanel>
//         <TabPanel>
//           <p>Tesla</p>
//         </TabPanel>
//         <TabPanel>
//           <p>Sport</p>
//         </TabPanel>
//       </TabPanels>
//     </Tabs>
//   );
// };
// export default Nav;
// import React from "react";
// import axios from "axios";
// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import Container from "../Container/Container";

// const Nav = () => {
//   const BASE_URL = "https://newsapi.org";
//   const [news, setNews] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [what, setWhat] = React.useState("bitcoin");
//   // const [pagination, setPagination] = React.useState({});
//   const [page, setPage] = React.useState(1);

//   const getNews = (page) => {
//     setLoading(true);
//     try {
//       axios
//         .get(
//           `${BASE_URL}/v2/everything?q=${what}&pageSize=3&page=${page.toString()}&apiKey=fd2714cb9c9b44d6841ddf6d504519bf`
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
//     <div>
//       <Box sx={{ backgroundColor: "blue" }}>
//         <BottomNavigation showLabels>
//           <BottomNavigationAction
//             label="bitcoin"
//             onClick={() => setWhat("bitcoin")}
//           />
//           <BottomNavigationAction
//             label="apple"
//             onClick={() => setWhat("apple")}
//           />
//           <BottomNavigationAction
//             label="tesla"
//             onClick={() => setWhat("tesla")}
//           />
//           <BottomNavigationAction
//             label="sport"
//             onClick={() => setWhat("sport")}
//           />
//         </BottomNavigation>
//       </Box>
//       <Container news={news} />
//     </div>
//   );
// };

// export default Nav;
import React from "react";
import "./Nav.css";
import { Button, Grid } from "@nextui-org/react";

export default function Header({
  showTesla,
  showBusinessHeadlines,
  showTechCrunch,
  showWallStreet,
}) {
  return (
    <Grid.Container gap={2} className="header">
      <Grid>
        <Button flat color="primary" auto size="lg" onClick={showTesla}>
          Information about Tesla Articles
        </Button>
      </Grid>
      <Grid>
        <Button
          flat
          color="secondary"
          auto
          size="lg"
          onClick={showBusinessHeadlines}
        >
          Top business headlines in the US
        </Button>
      </Grid>
      <Grid>
        <Button flat color="success" auto size="lg" onClick={showTechCrunch}>
          Top headlines from TechCrunch
        </Button>
      </Grid>
      <Grid>
        <Button flat color="warning" auto size="lg" onClick={showWallStreet}>
          Information about Wall Street Journal
        </Button>
      </Grid>
    </Grid.Container>
  );
}
