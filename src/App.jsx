import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  VideoDetail,
  ChanelDetail,
  SearchFeed,
  Feed,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "gray" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChanelDetail />} />
          <Route path="/search/:searchItem" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
