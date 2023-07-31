import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Video, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChanelDetail = () => {
  const { id } = useParams();
  const [chanelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(140,216,238,1) 0%, rgba(9,9,121,1) 35%, rgba(2,0,36,1) 89%, rgba(177,234,246,1) 100%)",
            zIndex: 10,
          }}
        />
        {/**the logo of channel */}
        <ChannelCard channelDetail={chanelDetail} marginTop="-93px" />
      </Box>

      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  );
};

export default ChanelDetail;
