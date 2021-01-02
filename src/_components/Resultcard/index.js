import React, { Component } from 'react'

/**
* @author
* @class Resultcard
**/

class Resultcard extends Component {
   
    render() {
        return (
            <div className="card" style={{ textAlign: 'left', marginBottom: '5px' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.recipe.label}</h5>
                    <img className="card-img-top" src={this.props.data.recipe.image} alt={this.props.data.recipe.label} style={{ width: '200px', float: 'left', marginRight: '5px' }}></img>
                    <p className="card-text"><strong>Calories:</strong> {this.props.data.recipe.calories}</p>
                    <p className="card-text"><strong>Cuisine Type:</strong>
                        {this.props.data.recipe.cuisineType && this.props.data.recipe.cuisineType.map((val) => {
                            return (<span className="badge badge-secondary customBadge" key={val}>{val}</span>)
                        })}
                    </p>
                    <p className="card-text"><strong>Diet Labels:</strong>
                        {this.props.data.recipe.dietLabels && this.props.data.recipe.dietLabels.map((val) => {
                            return (<span className="badge badge-secondary customBadge" key={val}>{val}</span>)
                        })}
                    </p>
                    <p className="card-text"><strong>Dish Type:</strong>
                        {this.props.data.recipe.dishType && this.props.data.recipe.dishType.map((val) => {
                            return (<span className="badge badge-secondary customBadge" key={val}>{val}</span>)
                        })}
                    </p>
                    <p className="card-text"><strong>Meal Type:</strong>
                        {this.props.data.recipe.mealType && this.props.data.recipe.mealType.map((val) => {
                            return (<span className="badge badge-secondary customBadge" key={val}>{val}</span>)
                        })}
                    </p>
                    <p className="card-text"><strong>Health:</strong>
                        {this.props.data.recipe.healthLabels && this.props.data.recipe.healthLabels.map((val) => {
                            return (<span className="badge badge-secondary customBadge" key={val}>{val}</span>)
                        })}
                    </p>
                </div>
            </div>


        )
    }
}


Resultcard.propTypes = {}
export default Resultcard