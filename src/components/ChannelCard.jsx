import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../assets/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "356px", md: "320px" },
          margin: "0 5px 5px 0",
          boxShadow: "none",
          borderRadius: "20px"
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "1px solid #e3e3e3",
                mb: 2,
              }}
            />
            <Typography varient="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 14, color: "grey", ml: "5px" }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString()}{" "}
                Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    </div>
  );
};

export default ChannelCard;
