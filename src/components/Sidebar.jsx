import { useState } from "react";
import { Stack } from "@mui/material";
import { categories } from "../assets/constants";



const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction={"row"}
    sx={{
      overflowY:"auto",
      height: { sx: "4rem" },
      // flexDirection: { md: "column" }
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={()=>(setSelectedCategory(category.name))}
        style={{
          background: category.name === selectedCategory && "#4b4b4b",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{color: category.name === selectedCategory? 'red':'white', marginRight:'1rem'}}>{category.icon}</span>
        <span style={{opacity: category.name === selectedCategory? '1':'0.6'}}>{category.name}</span>
      </button>
    ))}
    ;
  </Stack>
);

export default Sidebar;
