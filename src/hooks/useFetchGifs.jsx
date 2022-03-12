import { useState, useEffect } from "react";
import GetGifs from "../helpers/getGifs";
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    GetGifs(category).then((images) => {
      setState({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return state; //{data: [],loading: false}
};
