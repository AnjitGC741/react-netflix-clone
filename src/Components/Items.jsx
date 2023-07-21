import React, { useEffect, useState } from "react";
import "../assests/Css/Items.css";
import netflixLogo from "../assests/Img/netflix-logo2.png";
function Iteams({ type, fetchUrl, margin, onButtonClick }) {
  const marginValue = {
    marginTop: "-110px",
  };
  const [itemsValue, setItemsValue] = useState([]);
  const fetchItems = () => {
    fetch(`https://api.themoviedb.org/3/${fetchUrl}`)
      .then((response) => response.json())
      .then((data) => setItemsValue(data.results));
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div>
      <div className="media-section" style={margin ? marginValue : null}>
        <h1 className="categories">{type}</h1>
        <div className="media-list">
          {itemsValue.map((value, index) => {
              const handleClick = () => {
                onButtonClick(fetchUrl,prevValue => (prevValue === value ? '' : value));
              }
            return (
              <div onClick={handleClick} key={index} className="media" tabIndex={0}>
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
          })}
        </div>
      </div>
    </div>
  );
}
export default Iteams;
// kids
// https://api.themoviedb.org/3/discover/tv?api_key=92cc6ff97f5700f52e2d3a424c1e4b8f&with_genres=16&sort_by=vote_average.desc
