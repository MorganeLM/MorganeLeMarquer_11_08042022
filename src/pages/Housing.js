import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Housing.css';
import Gallery from "../components/Gallery";
import AboutCard from "../components/AboutCard";


function HousingCard() {
  const params = useParams()
  const [housingData, loadData] = useState([])
  const navigate = useNavigate();
    
  useEffect(() => {
      fetch("http://localhost:3000/logements.json").then(response => {
          return response.json();
          }).then(data => {
              let filteredData = data.filter(house => house.id === params.housingId);
              if(filteredData.length > 0){
                loadData(filteredData);
              }else{
                navigate("*", { replace: true });
              }
          }).catch(err => {
              console.log(err);
          });
      }, [])

      function transformList(list){
        let htmlList = list.map(elt => `${elt} \n`);
        let reducedList = htmlList.reduce((previousValue, currentValue) => previousValue + currentValue, '')
        return reducedList;
      }

      const maxStars = 5;

   return (
     <main>
        {housingData.map((housing) => (
            <article className="housing" key={housing.id}>
              <Gallery cover={housing.cover} pictures={housing.pictures} />

              <div className="housing-content">
                <div className="housing-content-info">
                  <h2>{housing.title}</h2>
                  <p>{housing.location}</p>
                  <div className="housing-content-info-tags">
                    {housing.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>

                <div className="housing-content-host">
                  <div className="housing-content-host-info">
                    <p>{housing.host.name.split(' ')[0]} <br/> {housing.host.name.split(' ')[1]}</p>
                    <div className="housing-content-host-info-picture">
                      <img src={housing.host.picture} alt=''/>
                    </div>
                  </div>

                  <div className="housing-content-host-rating">
                    { Array.apply(null, { length: housing.rating }).map((e, i) => (
                        <span className="red-star" key={i}>
                          <i className="las la-star"></i>
                        </span>
                      )) }
                    { Array.apply(null, { length: maxStars - (housing.rating) }).map((e, i) => (
                        <span className="grey-star" key={i}>
                          <i className="las la-star"></i>
                        </span>
                      )) }
                  </div>
                </div>
              </div>
              
              <div className='housing-description-wrapper'>
                <AboutCard title="description" description={housing.description}/>
                <AboutCard title="équipements" description={transformList(housing.equipments)} />
              </div>
            </article>
        ))}
     </main>
    );
  }
  
  export default HousingCard;