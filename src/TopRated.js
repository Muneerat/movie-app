import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCameraMovie } from "react-icons/bi";
import axios from "axios";

const TopRated =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'";
const TopRatedMovics = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    try {
      const resp = await axios(TopRated, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWIxMDkzNGI1M2M0MzQxYjE4MDY0Y2I1OGMwYzJkNyIsInN1YiI6IjYzZDc4Y2EzMjJkZjJlMDBiMjA5YmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18M4ncSuJ3G_Mn3ChLfA2bMp5shpMj6X6-Fokuh1VG0",
        },
      });
      const data = resp.data;
      const myMovieData = data.results;
      setMovies(myMovieData);
      // return <div class="text-[red]">${myMovieData.original_title}</div>;
      console.log(data.results);
    } catch (error) {
      console.log(error + "error:");
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="text-[#fff] p-6 bg-">
      <h1 className=" font-bold text-xl ml-12">Trending</h1>
      <div className="w-11/12 mx-auto mt-8">
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="mb-8 mx- w-44">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="w-44 h-auto rounded-lg"
              />
              <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
              {/* <p className="mt-2 text-sm text-gray-700">
                      {movie.overview}
                    </p> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRatedMovics;
