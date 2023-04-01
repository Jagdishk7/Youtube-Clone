import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard  from "./VideoCard";
import ChannelCard  from "./ChannelCard";

const Videos = ({ videos , direction }) => {
if(videos==null) return "Loading..."

  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="center" gap="2">
      {videos.map((item,idx)=>(
        <Box key={idx} >
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} style={{backgroundColor:'red'}} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
