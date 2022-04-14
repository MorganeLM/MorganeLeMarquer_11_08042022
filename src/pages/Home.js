//import { Link } from 'react-router-dom'
import Banner from "../components/Banner";
import HousingGrid from "../components/HousingGrid";
import { useRef, useEffect } from 'react'

function Home() {
  let housingData = useRef([]);
    useEffect(() => {
        fetch('logements.json').then(response => {
            return response.json();
            }).then(data => {
                housingData = data;
            }).catch(err => {
                console.log(err);
            });
        })

  return (
    <div className="Home">
      <Banner />
      <HousingGrid housingData={housingData} />
    </div>
  );
}

export default Home;
