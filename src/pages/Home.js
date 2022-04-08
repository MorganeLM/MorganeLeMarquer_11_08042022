import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
      <h1>HOME</h1>
      <Link to="/housing/23">Logement 23</Link>
    </div>
  );
}

export default Home;
