import React,{useState} from "react";
import '../assests/Css/Search.css';
import { useNavigate } from 'react-router';
function Search(){
  const navigateTo = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [searchValue,setSearchValue] = useState('');
    const activateSearch = () => {
        if(searchValue === ""){
            setIsActive(!isActive);
        }
        else{
        navigateTo(`/search?q=${searchValue}`);
        }
    };
    return(
        <div className={`search-box ${isActive ? 'active' : ''}`}>
           <button id="search-box__icon"  onClick={activateSearch}> <ion-icon  name="search-outline"></ion-icon></button>
            <input type="text" className="search-box__input" onChange={event=>setSearchValue(event.target.value)} placeholder="Titles,people,genres" />
        </div>
    );
}
export default Search;

