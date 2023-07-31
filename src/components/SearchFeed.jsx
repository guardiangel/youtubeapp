import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchItem } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchItem}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchItem]);

  return (
    <Box
      p={2}
      sx={{
        overflow: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search result for:
        <span style={{ color: "#F31503" }}>{searchItem}</span> videos
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
