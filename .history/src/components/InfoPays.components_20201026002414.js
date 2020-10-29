import React, {  useEffect , useState} from 'react'
import './css/ListPays.css';

function Pays({}){
  useEffect(() => {
    //fetchPays();
    //console.log(window.location.href)
  }, []);

  const [item, setItem] = useState({})
  
  /*const fetchPays = async () => {
    const fetchPays = await fetch(
      "https://restcountries.eu/rest/v2/all",
      {
        headrs:{"Access-Control-Allow-Origin": "*"}
      }
    )
  const item = await fetchPays.json()
  console.log(item)
  }*/
  
  return (
      <div>
          <h1>Test </h1>
      </div>
  )
}
  
export default Pays;
  
