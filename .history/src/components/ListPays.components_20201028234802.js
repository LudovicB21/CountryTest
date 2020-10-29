import React, { Component, useEffect , useState} from 'react'
import InfoPays from './InfoPays.components';
import './css/ListPays.css';
import {Link} from 'react-router-dom'

function Pays(){
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([])
  
  const fetchItems = async () => {
    const data = await fetch(
      "https://restcountries.eu/rest/v2/all",
        {
          headrs:{"Access-Control-Allow-Origin": "*"}
        }
    )
    const items = await data.json()
    console.log(items)
    setItems(items);
  };
  
  return (
      <div>
        <ul>
          {items.map(pays => {
            <Link to={`/${pays.name}`}>
              <li>{pays.name} <img src={pays.flag} style={{width: "50px", height: "50px"}} />
              </li>
            </Link>
          })}
        </ul>
      </div>
  );
}
  
export default Pays;
  
