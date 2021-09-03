import React, { Component } from "react";
import {getplants} from './PlantListServices/getplants'  // this is were the axios call is happening

export default class PlantList extends Component {



state = {
  plants: null,
}



  componentDidMount() {
    getplants()              /// we are invoking a function that does the axios call and  .then are chained together
      .then(plant => {
        this.setState({
          plants: plant,
        })
      })
      .catch(err => console.error(err));
      
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
   
    if(!this.state.plants) return <p style={{color:'red' ,textAlign:'center' }} > please wait we are loading information</p>
    return (
      <main className="plant-list">
        {this.state.plants?.map((plant) => (
          <div className="plant-card" key={plant.id} data-testid="plant-card">
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
