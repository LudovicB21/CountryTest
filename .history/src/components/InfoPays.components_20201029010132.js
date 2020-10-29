import React, { Component } from 'react'

class InfoPays extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log(this.props.location.query.pays)
    return (
      <div>
          <h1> {pays.name} </h1>
      </div>
    )
  }
}

export default  InfoPays