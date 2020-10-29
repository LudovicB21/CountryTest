import React, { Component } from 'react'

class InfoPays extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log(this.props.location.query.pays.name)
    return (
      <div>
          <h1> Test </h1>
      </div>
    )
  }
}

export default  InfoPays