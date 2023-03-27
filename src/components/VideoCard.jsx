import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../assets/constants";

const VideoCard = ({video,
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log('video',video);
  return (
    <Card sx={{ backgroundColor: "#000",width:{ md:'320px', xs:'100%'}, boxShadow:'none' , borderRadius:' 20px 20px 5px 5px' , margin:'0 15px 5px 0'}}>
      <Link to={videoId ? "/video/${videoId}" : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ borderRadius:'20px', width: '320px', height: '180px' }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#000", height: "5rem" }}>
        <Link to={videoId ? "/video/${videoId}" : demoVideoUrl}>
          <Typography varient="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? "/channel/${channelId}" : demoChannelUrl}>
          <Typography varient="subtitle2" fontWeight="bold" color="grey">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize:12 , color:'grey', ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
