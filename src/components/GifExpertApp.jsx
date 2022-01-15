import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GiftGrid from "./GiftGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((value) => 
        <GiftGrid category={value} key={value} />)}
      </ol>
    </>
  );
};
export default GifExpertApp;
