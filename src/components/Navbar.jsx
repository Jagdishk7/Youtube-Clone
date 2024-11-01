import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo  from "../assets/StreamNest.png";

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
        <img src={logo} alt="logo" height={70} />
        <Typography className="logo" color="#fff" varient="title" fontSize={'1.5rem'} fontWeight={'800'}>
          <span className="logoSpan">S</span>treamNest
        </Typography>
       </Link>
       <SearchBar/>       
      </Stack>
    </>
  );
};

export default Navbar;
