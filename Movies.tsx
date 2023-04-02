import { useState } from 'react';
import data from '../moviedatasample.json';
import Navbar from '../Navbar';

const mds = data.MovieData;

function Movies() {
  const [ListofMovies, setListofMovies] = useState(mds);

  const addMovie = () => {
    setListofMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };
  return <h1>This is a test!</h1>;
}

export default Movies;
