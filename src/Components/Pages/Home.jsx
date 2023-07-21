import React,{useState} from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import Iteams from '../Items';
import fetchMedia from '../Request';
import MediaDetail from '../MediaDetail';
import "../../assests/Css/Home.css";
function Home() {
  const [valueFromItems, setValueFromIteams] = useState('');
  const [urlFromItems, setUrlFromIteams] = useState('');
  const openMediaDetialBox = (fetchUrl,value)=>{
    setValueFromIteams(value);
    setUrlFromIteams(fetchUrl);
  };
  return (
    <div className='home-main-div'>
      <Navbar/>
      <MediaDetail valueFromItems = {valueFromItems} urlFromItems = {urlFromItems}/>
      <HeroSection/>
      <Iteams onButtonClick={openMediaDetialBox} margin={true} type="New Releases" fetchUrl={fetchMedia.fetchNewRelease} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Only on Netflix" fetchUrl={fetchMedia.fetchOnlyInNetflix} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Top rated Series" fetchUrl={fetchMedia.fetchTopRatedSeries} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Documentries" fetchUrl={fetchMedia.fetchDocumentry} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Animated" fetchUrl={fetchMedia.fetchAnimated} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Horror" fetchUrl={fetchMedia.fetchHorror} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="War" fetchUrl={fetchMedia.fetchWar} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Family" fetchUrl={fetchMedia.fetchFamily} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Science Friction" fetchUrl={fetchMedia.fetchSciFri} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Crime" fetchUrl={fetchMedia.fetchCrime} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Adventure" fetchUrl={fetchMedia.fetchAdvanture} />
      <Iteams onButtonClick={openMediaDetialBox} margin={false} type="Kids" fetchUrl={fetchMedia.fetchKids} />
    </div>
  );
}

export default Home;