import React, { Component, useEffect } from 'react'

function ItemDetail({ match }){
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);


  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      
    )
  }

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