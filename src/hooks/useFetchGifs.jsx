import {useState, useEffect} from 'react'; 
import GetGifs from "../helpers/getGifs"
export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    }); 

    
  useEffect(() => {
    GetGifs(category)
    .then(images => {
        // setTimeout(() => {          
            setState({
                data:images,
                loading: false
            })
        // }, 1200);
    });
  }, [category]);

  return state; //{data: [],loading: true}
}