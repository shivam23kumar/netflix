import React, {useState,useEffect} from 'react';
import axios from "axios";
import Movie from "./Movie";


const Row = ({title,fetchURL}) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  useEffect(() => {
    const fetchMovie = async ()=>{
    try{
      const response = await axios.get(fetchURL)
      setMovies(response.data.results)
    }catch(error){
      console.error("Error fetching movies data", error);
    }
    
  };
  fetchMovie();
  },[fetchURL]);
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
        <div className="relative flex items-center">
          <div id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
            {movies.map((item, id)=>(
              <Movie key={id} item={item}/>
            ))}

          </div>
        </div>
      
    </>
  )
}

export default Row
