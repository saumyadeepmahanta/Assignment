// import "./App.css";
// import { useState, useEffect } from "react";
// import Star from "./Star";
// import Loader from "./Loader";
// import MovieDetails from "./movieDetails";

// function App() {
//   const [query, setQuery] = useState("");
//   const [movieData, setMovieData] = useState(null);
//   const [favorites, setFavorites] = useState(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
//     return savedFavorites ? savedFavorites : [];
//   });
//   const [loading, setLoading] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState(null); // State to track selected movie
//   const [showFavorites, setShowFavorites] = useState(false); // State to track if favorites should be displayed
//   const [showMovieDetails, setShowMovieDetails] = useState(false); // State to track if movie details should be displayed

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
//     if (savedFavorites) {
//       setFavorites(savedFavorites);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const fetchMovie = async (movieName) => {
//     setLoading(true);
//     try {
//       const URL = `http://www.omdbapi.com/?t=${movieName}&apikey=e45311a3`;
//       const response = await fetch(URL);
//       const finalData = await response.json();

//       if (finalData.Response === "False") {
//         setMovieData({
//           Title: "No movie found",
//         });
//       } else {
//         setMovieData(finalData);
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     if (query.trim() !== "") {
//       fetchMovie(query);
//       setSelectedMovie(null); // Reset selected movie when performing new search
//       setShowFavorites(false); // Hide favorites when performing new search
//       setShowMovieDetails(false); // Hide movie details when performing new search
//     }
//   };

//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//     setMovieData(null); // Clear movieData to avoid showing previous details
//     setShowFavorites(false); // Hide favorites when selecting a movie
//     setShowMovieDetails(true); // Show movie details when selecting a movie
//   };

//   const handleFavoriteToggle = (movie, e) => {
//     e.stopPropagation(); // Prevent the click event from propagating to the parent elements
//     setFavorites((prevFavorites) => {
//       if (prevFavorites.find((fav) => fav.imdbID === movie.imdbID)) {
//         // Removing from favorites
//         return prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
//       } else {
//         // Adding to favorites
//         return [...prevFavorites, movie];
//       }
//     });
//   };

//   return (
//     <div className="app-container">
//       <div className="search-section">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for a movie"
//           className="search-input"
//         />
//         <button onClick={handleSearch} className="search-button">
//           Search
//         </button>
//         <button
//           onClick={() => {
//             setShowFavorites(!showFavorites);
//             setShowMovieDetails(false); // Hide movie details when toggling favorites
//           }}
//           className="favorites-button"
//         >
//           View Favorites
//         </button>
//       </div>
//       {!showFavorites && !showMovieDetails && (
//         <div className="movies-container">
//           {loading ? (
//             <Loader />
//           ) : movieData && movieData.Title !== "No movie found" ? (
//             <div className="card" onClick={() => handleMovieClick(movieData)}>
//               <div
//                 className="star-container"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <Star
//                   isFavorite={favorites.some(
//                     (fav) => fav.imdbID === movieData.imdbID
//                   )}
//                   onToggle={(e) => handleFavoriteToggle(movieData, e)}
//                 />
//               </div>
//               <h1>{movieData.Title}</h1>
//               <p>Release Date: {movieData.Released}</p>
//               {movieData.Poster ? (
//                 <img src={movieData.Poster} alt={`${movieData.Title} Poster`} />
//               ) : (
//                 <p>No poster available</p>
//               )}
//             </div>
//           ) : (
//             movieData && (
//               <div className="card">
//                 <h1>{movieData.Title}</h1>
//                 <p>{movieData.Error}</p>
//               </div>
//             )
//           )}
//         </div>
//       )}
//       {showFavorites && !showMovieDetails && (
//         <div className="favorites-list">
//           <h2>Favorites</h2>
//           {favorites.length > 0 ? (
//             favorites.map((movie) => (
//               <div
//                 key={movie.imdbID}
//                 className="card"
//                 onClick={() => handleMovieClick(movie)}
//               >
//                 <div
//                   className="star-container"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <Star
//                     isFavorite={true}
//                     onToggle={(e) => handleFavoriteToggle(movie, e)}
//                   />
//                 </div>
//                 <h3>{movie.Title}</h3>
//                 {movie.Poster && (
//                   <img
//                     src={movie.Poster}
//                     alt={`${movie.Title} Poster`}
//                     className="card-container"
//                   />
//                 )}
//               </div>
//             ))
//           ) : (
//             <p>No favorites added yet.</p>
//           )}
//         </div>
//       )}
//       {showMovieDetails && (
//         <MovieDetails
//           movieData={selectedMovie}
//           onClose={() => {
//             setSelectedMovie(null);
//             setShowMovieDetails(false);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState, useEffect } from "react";
import Star from "./Star";
import Loader from "./Loader";
import MovieDetails from "./movieDetails";

function App() {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    return savedFavorites ? savedFavorites : [];
  });
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to track selected movie
  const [showFavorites, setShowFavorites] = useState(false); // State to track if favorites should be displayed
  const [showMovieDetails, setShowMovieDetails] = useState(false); // State to track if movie details should be displayed

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchMovie = async (movieName) => {
    setLoading(true);
    try {
      const URL = `http://www.omdbapi.com/?t=${movieName}&apikey=e45311a3`;
      const response = await fetch(URL);
      const finalData = await response.json();

      if (finalData.Response === "False") {
        setMovieData({
          Title: "No movie found",
        });
      } else {
        setMovieData(finalData);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      fetchMovie(query);
      setSelectedMovie(null); // Reset selected movie when performing new search
      setShowFavorites(false); // Hide favorites when performing new search
      setShowMovieDetails(false); // Hide movie details when performing new search
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setMovieData(null); // Clear movieData to avoid showing previous details
    setShowFavorites(false); // Hide favorites when selecting a movie
    setShowMovieDetails(true); // Show movie details when selecting a movie
  };

  const handleFavoriteToggle = (movie, e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent elements
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.imdbID === movie.imdbID)) {
        // Removing from favorites
        return prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID);
      } else {
        // Adding to favorites
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <div className="app-container container mx-auto p-4">
      <div className="search-section flex flex-col items-center mb-6 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
          className="search-input border p-2 rounded w-full md:w-1/2"
        />
        <div className="flex space-x-2">
          <button
            onClick={handleSearch}
            className="search-button bg-blue-500 text-white p-2 rounded w-full md:w-auto"
          >
            Search
          </button>
          <button
            onClick={() => {
              setShowFavorites(!showFavorites);
              setShowMovieDetails(false); // Hide movie details when toggling favorites
            }}
            className="favorites-button bg-green-500 text-white p-2 rounded w-full md:w-auto"
          >
            View Favorites
          </button>
        </div>
      </div>
      {!showFavorites && !showMovieDetails && (
        <div className="movies-container flex flex-wrap justify-center">
          {loading ? (
            <Loader />
          ) : movieData && movieData.Title !== "No movie found" ? (
            <div
              className="card border p-4 rounded m-2 w-full md:w-1/3 lg:w-1/4"
              onClick={() => handleMovieClick(movieData)}
            >
              <div
                className="star-container"
                onClick={(e) => e.stopPropagation()}
              >
                <Star
                  isFavorite={favorites.some(
                    (fav) => fav.imdbID === movieData.imdbID
                  )}
                  onToggle={(e) => handleFavoriteToggle(movieData, e)}
                />
              </div>
              <h1 className="text-lg font-bold">{movieData.Title}</h1>
              <p>Release Date: {movieData.Released}</p>
              {movieData.Poster ? (
                <img
                  src={movieData.Poster}
                  alt={`${movieData.Title} Poster`}
                  className="w-full h-auto"
                />
              ) : (
                <p>No poster available</p>
              )}
            </div>
          ) : (
            movieData && (
              <div className="card border p-4 rounded m-2">
                <h1 className="text-lg font-bold">{movieData.Title}</h1>
                <p>{movieData.Error}</p>
              </div>
            )
          )}
        </div>
      )}
      {showFavorites && !showMovieDetails && (
        <div className="favorites-list flex flex-wrap justify-center">
          <h2 className="w-full text-xl font-bold mb-4">Favorites</h2>
          {favorites.length > 0 ? (
            favorites.map((movie) => (
              <div
                key={movie.imdbID}
                className="card border p-4 rounded m-2 w-full md:w-1/3 lg:w-1/4"
                onClick={() => handleMovieClick(movie)}
              >
                <div
                  className="star-container"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Star
                    isFavorite={true}
                    onToggle={(e) => handleFavoriteToggle(movie, e)}
                  />
                </div>
                <h3 className="text-lg font-bold">{movie.Title}</h3>
                {movie.Poster && (
                  <img
                    src={movie.Poster}
                    alt={`${movie.Title} Poster`}
                    className="w-full h-auto"
                  />
                )}
              </div>
            ))
          ) : (
            <p>No favorites added yet.</p>
          )}
        </div>
      )}
      {showMovieDetails && (
        <MovieDetails
          movieData={selectedMovie}
          onClose={() => {
            setSelectedMovie(null);
            setShowMovieDetails(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
