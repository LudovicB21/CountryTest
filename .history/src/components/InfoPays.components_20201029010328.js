import React, { Component } from 'react'

class InfoPays extends Component {
  constructor(props){
    super()
  }

  render() {
    const name = this.props.location.query.pays.name
    console.log(name)
    return (
      <div>
          <h1> Test </h1>
      </div>
    )
  }
}

export default  InfoPays