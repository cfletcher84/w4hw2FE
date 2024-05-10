import React, { useState } from 'react';

function MoviesList() {
    const [movies, setMovies] = useState([
        {title: "Interstellar", details: "Cool space movie"},
        {title: "Planet of the Apes", details: "Monkeys take over the world"},
        {title: "The Incredibles", details: "Superheroes saving the world"}
    ])

    const toggleDetails = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].showDetails = !updatedMovies[index].showDetails;
        setMovies(updatedMovies);
      };

      const removeMovie = (index) => {
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
      };

    return (
        <div>
            <h1>Movies</h1>
            <ul>
            {movies.map((movie, index) => (
                <li key={index}>
                    <span
                      style={{cursor: 'pointer'}}
                      onClick={()=> toggleDetails(index)}>
                        {movie.title}
                      </span>
                      <button onClick={() => removeMovie(index)}>Remove</button>
                      {movie.showDetails && <p>{movie.details}</p>}
                </li>
                ))}
            </ul>
        </div>

    );
};

export default MoviesList;