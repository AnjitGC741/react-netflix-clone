import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MediaDetail from '../MediaDetail';
import "../../assests/Css/SearchResult.css";
import netflixLogo from "../../assests/Img/netflix-logo2.png";
import Navbar from "../Navbar";
export default function SearchResult() {
  const [isLoading, setLoading] = useState(true);
  const [searchSeriesData, setSearchSeriesData] = useState([]);
  const [searchMoviesData, setSearchMoviesData] = useState([]);
  const [searchParams] = useSearchParams();
  const [mediaId,setMediaId] = useState('');
  const [mediaUrl,setMediaUrl] = useState(''); 
  const fetchSearchSeries = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f&query=${searchParams.get(
          "q"
        )}`
      );
      const jsonData = await response.json();
      setSearchSeriesData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const fetchSearchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f&query=${searchParams.get(
          "q"
        )}`
      );
      const jsonData = await response.json();
      setSearchMoviesData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchSearchMovies();
    fetchSearchSeries();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [searchParams.get("q")]);
  return (
    <div>
      <Navbar />
        <MediaDetail valueFromItems = {mediaId} urlFromItems = {mediaUrl}/>
      <div className="search-result-media-data-section">
        {isLoading ? (
          <div className="loading-animation">
            <div className="lds-dual-ring"></div>
          </div>
        ) : (
           <div>
            {(searchMoviesData.results.length > 0 || searchSeriesData.results.length > 0)?
             <div className="search-result-list">
             {searchSeriesData &&
               searchSeriesData.results &&
               searchSeriesData.results.map((value, index) => {
                 const handleClick = () => {
                   setMediaId(value.id);
                   setMediaUrl('discover/tv?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f');
                 }
                 if(value.poster_path){
                   return (
                     <div onClick={handleClick} className="media" key={index}>
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
               })}
                  {searchMoviesData &&
               searchMoviesData.results &&
               searchMoviesData.results.map((value, index) => {
                 const handleClick = () => {
                   setMediaId(value.id);
                   setMediaUrl('discover/movie?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f');
                   
                 }
                 if(value.poster_path){
                   return (
                     <div onClick={handleClick} className="media" key={index}>
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
               })}
           </div>
           :
            <div className="nothing-found-box">
              <div>
                <p className="notFound-text notFound-text-extra-margin-bottom">{`Your search for "${searchParams.get("q")}" did not have any matches.`}</p>
                <p className="notFound-text notFound-text-extra-margin-bottom">Suggestions:</p>
                <ul>
                  <li className="notFound-text">Try different keywords</li>
                  <li className="notFound-text">Looking for a movie or TV show</li>
                  <li className="notFound-text">Try using movie,TV show title,actor or director</li>
                  <li className="notFound-text">Try a genre like comedy,romance,sport or drama </li>
                </ul>
                </div>
            </div>
            }
           </div>
        )}
      </div>
    </div>
  );
}
