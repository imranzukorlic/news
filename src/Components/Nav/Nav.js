import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Bitcoin</Tab>
        <Tab>Apple</Tab>
        <Tab>Tesla</Tab>
        <Tab>Sport</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Bitcoin</p>
        </TabPanel>
        <TabPanel>
          <p>Apple</p>
        </TabPanel>
        <TabPanel>
          <p>Tesla</p>
        </TabPanel>
        <TabPanel>
          <p>Sport</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Nav;
