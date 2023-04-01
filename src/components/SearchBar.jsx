import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = (e) =>{
    // e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleOnSubmit}
      sx={{
        borderRadius: 20,
        border: ".5px solid #e3e3e3",
        pl: 1,
        boxShadow: "none",
        backgroundColor:"#000000",
        mr: { sm: 5 },
      }}
    >
      <input 
      className="search-bar" 
      placeholder="Search..." 
      type="text"
      value={searchTerm}
      onChange={(e)=>(setSearchTerm(e.target.value))}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "#b5b5b5",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
