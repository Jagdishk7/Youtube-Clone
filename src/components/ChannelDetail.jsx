import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../assets/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // For Channel Details
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    //  For Videos of Channel
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box >
        <div
          style={{
            background:"linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            zIndex:10,
            height:'300px'
          }}
        />
        <Box sx={{display:'flex',justifyContent:'center',mt:'-7rem'}}>
          <ChannelCard channelDetail={channelDetail}/>
        </Box>
      </Box>
      <Box >
        <Box sx={{display:'flex',justifyContent:'center',p:2}}>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
