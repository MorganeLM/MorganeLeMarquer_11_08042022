import { useParams } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import AboutCard from "../components/AboutCard";


function HousingCard() {
  const params = useParams()
  const [housingData, loadData] = useState([])
    
  useEffect(() => {
      fetch("http://localhost:3000/logements.json").then(response => {
          return response.json();
          }).then(data => {
              let filteredData = data.filter(house => house.id === params.housingId);
              if(filteredData.length > 0){
                loadData(filteredData);
              }else{
                //redirect
                console.log('redirect')
              }
          }).catch(err => {
              console.log(err);
          });
      }, [])

      function transformList(list){
        //let htmlList = list.map(elt =><Fragment> <p>{elt}</p></Fragment>);
        let htmlList = list.map(elt => `${elt} \n`);
        let reducedList = htmlList.reduce((previousValue, currentValue) => previousValue + currentValue, '')
        return reducedList;
      }

   return (
     <main>
        {housingData.map((housing) => (
            <article className="Housing" key={housing.id}>
              <img src={housing.cover} alt=''/>
              <h2>{housing.title}</h2>
              <p>{housing.location}</p>
              <div>
                {housing.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div>
                <div>
                  {housing.rating} stars
                </div>
                <div>
                  <p>{housing.host.name}</p>
                  <div>
                    <img src={housing.host.picture} alt=''/>
                  </div>
                </div>
              </div>
              <div>
                <AboutCard title="description" description={housing.description}/>
                <AboutCard title="équipements" description={transformList(housing.equipments)} />
              </div>
            </article>
        ))}
     </main>
    );
  }
  
  export default HousingCard;