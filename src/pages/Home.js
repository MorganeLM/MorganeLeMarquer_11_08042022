import Banner from "../components/Banner";
import banner from '../assets/home-banner.png'
import HousingGrid from "../components/HousingGrid";

function Home() {

  return (
    <main className="Home">
      <Banner img={banner} title="Chez vous, partout et ailleurs" />
      <HousingGrid />
    </main>
  );
}

export default Home;
