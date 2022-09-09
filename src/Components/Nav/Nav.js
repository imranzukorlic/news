import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Nav;
