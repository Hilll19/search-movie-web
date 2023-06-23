import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api.js";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    })
  }, []);

  // Wrapper and add logic movie for content wrapper
  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img alt="moviepicture" className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
          <div className="Movie-date">release : {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  // This to use search movie logic, with query from api
  const search = async(q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    } 
  };
  //This main section to show content to web browser
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Cinema</h1>
        <input
          placeholder="cari movie..."
          className="Movie-search"
          // This targeted search value
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList /> 
        </div>
      </header>
    </div>
  );
};

export default App;
