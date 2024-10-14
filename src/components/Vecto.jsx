import vectoStyles from "../cssFolder/Vecto.module.css";
import playIcon from "../icons/play.png";
import { useEffect, useState } from "react";

function Vecto({isHover}) {
  console.log(isHover)

  const [eachMovie, setEachMovie] = useState();
  const [currentMovieIndex, setCurrentMovieIndex] = useState(null);
  const [data, setData] = useState([]);
  const [videoPlaying, setVideoPlaying] = useState(false); 

  useEffect(() => {
    fetch("data.json")
      .then((resp) => resp.json())
      .then((result) => {
        const storedData = sessionStorage.getItem("clickedMovieIds");
        const clickedMovieIds = storedData ? JSON.parse(storedData) : [];

        const sortedMovies = clickedMovieIds.length > 0
          ? [
              ...clickedMovieIds.map((id) => result.TendingNow.find((movie) => movie.Id === id)).filter(Boolean),
              ...result.TendingNow.filter((movie) => !clickedMovieIds.includes(movie.Id)),
            ]
          : result.TendingNow;

        setData({ ...result, TendingNow: sortedMovies });
      })
      .catch((error) => console.log(error));
  }, []);

  const updateStoredMovies = (movie, index) => {
    const movieId = movie.Id;

    const storedIds = sessionStorage.getItem("clickedMovieIds");
    let clickedMovieIds = storedIds ? JSON.parse(storedIds) : [];

    clickedMovieIds = clickedMovieIds.filter((id) => id !== movieId);
    clickedMovieIds.unshift(movieId);
    sessionStorage.setItem("clickedMovieIds", JSON.stringify(clickedMovieIds));

    setCurrentMovieIndex(index);
    setEachMovie(movie);
    
    setTimeout(() => {
      setVideoPlaying(true); 
    }, 2000);
  };

  return (
    <div className={!isHover ? vectoStyles.vecto : vectoStyles.vectoBlurred}>
      {videoPlaying && (
        <video
          className={vectoStyles.backgroundVideo}
          autoPlay
          muted
          playsInline
          onEnded={() => {
            setVideoPlaying(false);
            setCurrentMovieIndex(null); 
          }}
        >
          <source
            src={eachMovie?.VideoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )}

      <div className={vectoStyles.movieInfo}>
        <p style={{ fontSize: "25px" }}>{!videoPlaying ? data.Featured?.Category : eachMovie?.Category}</p>
        <span className={vectoStyles.movieTitle}>
          <p style={{ fontSize: "55px", fontWeight: "bold" }}>{!videoPlaying ? data.Featured?.Title : eachMovie?.Title}</p>
        </span>
        <span className={vectoStyles.movieYearDuration}>
          <p style={{ fontSize: "20px" }}>{!videoPlaying ? data.Featured?.ReleaseYear : eachMovie?.ReleaseYear}</p>
          <p style={{ fontSize: "20px" }}>{!videoPlaying ? data.Featured?.MpaRating : eachMovie?.MpaRating}</p>
          <p style={{ fontSize: "20px" }}>{!videoPlaying ? data.Featured?.Duration : eachMovie?.Duration}</p>
        </span>
        <span className={vectoStyles.movieDescription}>
          {!videoPlaying ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." : eachMovie?.Description}
        </span>
        <div className={vectoStyles.movieButtons}>
          <button className={vectoStyles.playButton}>
            <img src={playIcon} alt="" style={{ width: "20px", height: "20px" }} />
            PLAY
          </button>
          <button className={vectoStyles.moreInfoButton}>More Info</button>
        </div>
      </div>

      <div className={vectoStyles.trendingNow}>
        <p>Trending Now</p>
        <div className={vectoStyles.trendMovies}>
          {data.TendingNow?.map((movie, index) => (
            <div className={vectoStyles.eachMovieSection} key={movie.Id} onClick={() => updateStoredMovies(movie, index)}>
              <img src={`/images/${movie.CoverImage}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vecto;