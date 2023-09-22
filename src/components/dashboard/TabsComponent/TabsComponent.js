import React, { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "./style.css";
import Grid from "../Grid";
import List from "../List";
export default function TabsComponent({ coin }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    width: "50vh",
    fontSize: "1.2rem",
    textTransform: "capitalize",
  };
  // for custom create theam
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div className="tab-component">
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="grid" value="grid" sx={style} />
            <Tab label="list" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          {" "}
          <div className="display-grid-flex">
            {coin.map((data, i) => (
              <Grid data={data} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
        <div className="display-list">
            {coin.map((data, i) => (
              <List data={data} />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
