import React, { Component } from 'react'

class InfoPays extends Component {
  constructor(props){
    super()
  }

  render() {
    console.log(this.props.name)
    return (
      <div>
          <h1>Test 1 </h1>
      </div>
    )
  }
}

export default  InfoPays