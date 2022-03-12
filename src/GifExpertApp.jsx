import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  
  //CAMBIO PARA EL TESTING
  // const GifExpertApp = ({defaultCategories = []}) => {
  // const [categories, setCategories] = useState(defaultCategories); 

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((value) => 
        <GifGrid category={value} key={value} />)}
      </ol>
    </>
  );
};
export default GifExpertApp;



