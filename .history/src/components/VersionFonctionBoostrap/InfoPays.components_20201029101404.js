import React from 'react'


function InfoPays() {
  return (
    <div>
       <div className="container">
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src={data.flag} alt="drapeau"/>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text" style={{textAlign: "left"}}>Population: {data.population}</p>
            <p className="card-text" style={{textAlign: "left"}}>Numéro: {data.alpha3Code}</p>
            <p className="card-text" style={{textAlign: "left"}}>Région: {data.region}</p>
            <p className="card-text" style={{textAlign: "left"}}>Sous-région: {data.subregion}</p>
            <p className="card-text" style={{textAlign: "left"}}>Devises: </p>
          </div>
        </div>
      </div>
    </div>
  )
}




export default InfoPays

