import React, { useEffect, useState, useRef } from "react";
import "../assests/Css/MediaDetail.css";
import netflixLogo from "../assests/Img/netflix-logo2.png";
import MediaSeasonList from "./MediaSeasonList";
export default function MediaDetail({ valueFromItems, urlFromItems }) {
  let sn = 0;
  let similarMediaCount = 0;
  let newFetchUrl = "";
  let newFetchUrlSimilar = "";
  const fetchSeasonOne = useRef("");
  const [visibilityMediaDetail, setVisibilityMediaDetail] = useState("");
  const [mediaDetail, setMediaDetail] = useState([]);
  const [similarMedia, setSimilarMedia] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchMediaDetail = async () => {
    try {
      const originalString = urlFromItems;
      let removeDiscover = originalString.replace(/discover|\/top_rated/g, "");
      const searchMovieText = removeDiscover.search("movie");
      const searchTvText = removeDiscover.search("tv");
      let id = valueFromItems.id ? valueFromItems.id : valueFromItems;
      console.log(id);
      if (searchMovieText !== -1) {
        newFetchUrl = removeDiscover.replace(
          "/movie",
          `movie/${id}`
        );
      } else if (searchTvText !== -1) {
        newFetchUrl = removeDiscover.replace("tv" , `tv/${id}`);
      }
      const response = await fetch(
        `https://api.themoviedb.org/3/${newFetchUrl}&append_to_response=credits,videos`
        );
        const jsonData = await response.json();
        if (jsonData.number_of_seasons) {
          fetchSeasonOne.current =  removeDiscover.replace("tv", `tv/${id}/season/1`);
      }
      setMediaDetail(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const fetchSimilarMedia = () => {
    const originalString = urlFromItems;
    let removeDiscover = originalString.replace(/discover|\/top_rated/g, "");
    const searchMovieText = removeDiscover.search("movie");
    const searchTvText = removeDiscover.search("tv");
    let id = valueFromItems.id ? valueFromItems.id : valueFromItems;
    if (searchMovieText !== -1) {
      newFetchUrlSimilar = removeDiscover.replace("/movie" , `movie/${id}/similar`);
    } else if (searchTvText !== -1) {
      newFetchUrlSimilar = removeDiscover.replace("tv" , `tv/${id}/similar`);
    }
    fetch(`https://api.themoviedb.org/3/${newFetchUrlSimilar}`)
      .then((response) => response.json())
      .then((data) => setSimilarMedia(data.results));
  };
  useEffect(() => {
    setLoading(true);
    setVisibilityMediaDetail(valueFromItems);
    fetchMediaDetail();
    fetchSimilarMedia();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [valueFromItems]);
  const hideMediaDetialDiv = {
    visibility: "visible",
  };
  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          //it checks whether the click has taken place in child element or the parent if it is parent then it will take action otherwise do nothing
          setVisibilityMediaDetail("");
        }
      }}
      style={visibilityMediaDetail ? hideMediaDetialDiv : null}
      className="media-detail-primary-div"
    >
      <div className="media-detail-section">
        {isLoading ? (
          <div className="loading-animation">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
          <div>
            <div className="media-img-name-section">
              <div className="media-backgroundImg-section">
                <img
                  src={`https://image.tmdb.org/t/p/original/${mediaDetail.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="media-img-name-button-gradient"></div>
              <div className="media-detail-close-btn">
                <button onClick={() => setVisibilityMediaDetail("")}>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
              <div className="media-name-section">
                <div className="media-netflix-logo-type">
                  <div className="media-netflix-logo">
                    <img src={netflixLogo} alt="" />
                  </div>
                  <div className="media-netflix-type">
                    <h3>SHOW</h3>
                  </div>
                </div>
                <h1>{mediaDetail.title || mediaDetail.name || "No name found"}</h1>
              </div>
            </div>
            <div className="media-releaseDate-Duration-rating">
              <p className="media-rating">
                {parseFloat(mediaDetail.vote_average).toFixed(1)} rating
              </p>
              <p className="media-releaseDate">
                {mediaDetail.release_date
                  ? new Date(Date.parse(mediaDetail.release_date)).getFullYear()
                  : ""}
              </p>
              <p className="media-runTime">
                {mediaDetail.runtime && (
                  <span>
                    {parseInt(parseInt(mediaDetail.runtime) / 60)}hrs
                    <span className="media-runtime-minutes">
                      {parseInt(mediaDetail.runtime) % 60}min
                    </span>
                  </span>
                )}
                {mediaDetail.number_of_seasons && (
                  <span>
                    {mediaDetail.number_of_seasons}
                    <span className="media-runtime-minutes">seasons</span>
                  </span>
                )}
              </p>
              <h1 className="media-hd-text">HD</h1>
            </div>
            <div className="media-short-description-section">
              <p className="media-short-description">{mediaDetail.overview}</p>
            </div>
            <div className="media-cast-genres">
              <p className="media-cast">
                Cast:
                {mediaDetail && mediaDetail.credits && mediaDetail.credits.cast
                  ? mediaDetail.credits.cast.map((value) => {
                      if (sn <= 5) {
                        sn++;
                        return " " + value.name + ",";
                      }
                    })
                  : "No cast found"}
              </p>
              <p className="media-cast">
                Director:
                { mediaDetail && mediaDetail.created_by
                   && mediaDetail.created_by.map((value) => {
                        return " " + value.name + ",";
                    })
                }
                {
                 mediaDetail.runtime && mediaDetail.credits && mediaDetail.credits.crew[0].name
                }
              </p>
              <p className="media-cast">
                Genres:
                {mediaDetail && mediaDetail.genres
                  ? mediaDetail.genres.map((value) => {
                      return " " + value.name  + ",";
                    })
                  : "No genres found"}
              </p>
            </div>
            {mediaDetail.number_of_seasons &&   <MediaSeasonList mediaDetailData = {mediaDetail} fetchSeasonOneDataUrl = {fetchSeasonOne.current}/>}
            <div className="similar-media-section">
              <h1 className="categories">More like this</h1>
              <div className="similar-media-list">
                {similarMedia &&
                  similarMedia.map((value, index) => {
                    if (similarMediaCount <= 16) {
                      similarMediaCount++;
                      if (value.id !== mediaDetail.id) {
                        return (
                          <div className="media" key={index}>
                            <div className="media-img">
                              <img
                                src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
                                alt="image"
                              />
                              <div className="netflix-logo-N">
                                <img src={netflixLogo} alt="" />
                              </div>
                            </div>
                          </div>
                        );
                      }
                    }
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
//https://api.themoviedb.org/3/movie/385687?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f&append_to_response=credits,videos
