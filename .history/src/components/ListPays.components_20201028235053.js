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
      <div className="container">
        <ul className="list-group">
          {items.map(pays => {
            return (<Link to={`/${pays.name}`}>
              <li className="list-group-item">
                {pays.name} <img src={pays.flag} style={{width: "50px", height: "50px"}} />
              </li>
            </Link>
          )})}
        </ul>
      </div>
  );
}
  
export default Pays;
  
