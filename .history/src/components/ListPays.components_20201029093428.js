import React, { Component, useEffect , useState} from 'react'
//import InfoPays from './InfoPays.components';
//import './css/ListPays.css';
import {Link} from 'react-router-dom'

/*
function Pays(){
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  
  const fetchItems = async () => {
    const data = await fetch(
      "https://restcountries.eu/rest/v2/all",
        {
          headrs:{"Access-Control-Allow-Origin": "*"}
        }
    )
    const items = await data.json()
    setItems(items);
  };

  
  return (
      <div className="container">
        <h1>List des pays dans le monde </h1>
          <ul className="list-group">
            {items.map(pays => {
              return (<Link to={{pathname: `/${pays.name}`, query: {pays}}}>
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
*/

class Pays extends Component{
  state = {
    items: []
  }

  
  componentDidMount(){
    fetch(
      "https://restcountries.eu/rest/v2/all"
    )
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.body)
      this.setState({items: responseJson.body})
    })
  }
  
  render(){
    return(
     <div>test</div>
    )
  }


}


export default Pays