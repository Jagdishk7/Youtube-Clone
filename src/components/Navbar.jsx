import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../assets/constants";

import SearchBar from "./SearchBar";


const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          backgroundColor: "#000",
          top: 0,
          justifyContent: "space-between",
          zIndex:'99'
        }}
      >
       <Link to='/' style={{display:"flex", alignItems:'center'}}>
        {/* <img src={logo} alt="logo" height={45} /> */}
        <Typography className="logo" color="#fff" varient="title" fontSize={'1.5rem'} fontWeight={'800'}>
          <span className="logoSpan">T</span>ubeLight
        </Typography>
       </Link>
       <SearchBar/>

       <img src="" alt="" />
       
      </Stack>
    </>
  );
};

export default Navbar;
