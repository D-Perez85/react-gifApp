import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
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
