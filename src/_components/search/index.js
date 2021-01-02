import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchActions } from '../../_actions'
import { APIURL } from '../../_constant'
import Resultcard from '../Resultcard'
import LoaderComponent from '../Loader'
import { Helmet } from "react-helmet";


/**
* @author
* @class SearchComponent
**/

const dishType = [
    { 'name': 'Alcohol-cocktail', 'value': 'alcohol-cocktail' },
    { 'value': 'biscuitsandcookies', 'name': 'Biscuits and cookies' },
    { 'name': 'Bread', 'value': 'bread' },
    { 'name': 'Cereals', 'value': 'cereals' },
    { 'name': 'Condiments and sauces', 'value': 'condimentsandsauces' },
    { 'name': 'Drinks', 'value': 'drinks' },
    { 'name': 'Desserts', 'value': 'desserts' },
    { 'name': 'Egg', 'value': 'egg' },
    { 'name': 'Main course', 'value': 'maincourse' }
]
const cuisineType = [
    { 'name': 'American', 'value': 'american' },
    { 'value': 'asian', 'name': 'Asian' },
    { 'name': 'British', 'value': 'british' },
    { 'name': 'Caribbean', 'value': 'caribbean' },
    { 'name': 'Chinese', 'value': 'chinese' },
    { 'name': 'French', 'value': 'french' },
    { 'name': 'Indian', 'value': 'indian' },
    { 'name': 'Italian', 'value': 'italian' },
    { 'name': 'Japanese', 'value': 'japanese' }
]
const mealType = [
    { 'name': 'Breakfast', 'value': 'breakfast' },
    { 'value': 'lunch', 'name': 'Lunch' },
    { 'name': 'Dinner', 'value': 'dinner' },
    { 'name': 'Snack', 'value': 'snack' },
    { 'name': 'Teatime', 'value': 'teatime' }
]
const diet = [
    { 'name': 'Balanced', 'value': 'balanced' },
    { 'value': 'high-fiber', 'name': 'High-Fiber' },
    { 'name': 'High-Protein', 'value': 'high-protein' },
    { 'name': 'Low-Carb', 'value': 'low-carb' },
    { 'name': 'Low-Fat', 'value': 'low-fat' },
    { 'name': 'Low-Sodium', 'value': 'low-sodium' }
]
const health = [
    { 'name': 'Alcohol-free', 'value': 'alcohol-free' },
    { 'value': 'celery-free', 'name': 'Celery-free' },
    { 'name': 'Dairy', 'value': 'dairy-free' },
    { 'name': 'Eggs', 'value': 'egg-free' },
    { 'name': 'Fish', 'value': 'fish-free' },
    { 'name': 'FODMAP free', 'value': 'fodmap-free' },
    { 'name': 'Gluten', 'value': 'gluten-free' },
    { 'name': 'Keto', 'value': 'keto-friendly' },
    { 'name': 'Kidney friendly', 'value': 'kidney-friendly' },
    { 'name': 'Kosher', 'value': 'kosher' }
]
const calories = [
    { 'name': '100-200', 'value': '100-200' },
    { 'name': '100-300', 'value': '100-300' },
    { 'name': '100-400', 'value': '100-400' },
    { 'name': '100-500', 'value': '100-500' },
    { 'name': '200-300', 'value': '200-300' },
    { 'name': '200-400', 'value': '200-400' },
    { 'name': '200-500', 'value': '200-500' },
    { 'name': '300-400', 'value': '300-400' },
    { 'name': '300-500', 'value': '300-500' },
    { 'name': '300-600', 'value': '300-600' },
    { 'name': '400-500', 'value': '400-500' },
    { 'name': '400-600', 'value': '400-600' },
    { 'name': '400-700', 'value': '400-700' }
]
const time = [
    { 'name': '1-5', 'value': '1-5' },
    { 'name': '5-10', 'value': '5-10' },
    { 'name': '10-15', 'value': '10-15' },
    { 'name': '15-20', 'value': '15-20' },
    { 'name': '20-25', 'value': '20-25' },
    { 'name': '25-35', 'value': '25-35' },
    { 'name': '35-45', 'value': '35-45' },
    { 'name': '45-55', 'value': '55-65' },
    { 'name': '65-80', 'value': '65-80' }
]


class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchedArr: [],
            search: '',
            cuisineType: '',
            mealType: '',
            dishType: '',
            calories: '',
            time: '',
            health: '',
            diet: '',
            submit: false
        }
    }

    //On change states update
    handleOnchange = (event) => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    //search event click..
    handleSubmit = (event) => {
        const { getSearchresult } = this.props;
        const cuisineType = this.state.cuisineType == '' ? `` : `&cuisineType=${this.state.cuisineType}`;
        const dishType = this.state.dishType == '' ? `` : `&dishType=${this.state.dishType}`;
        const mealType = this.state.mealType == '' ? `` : `&mealType=${this.state.mealType}`;
        const health = this.state.health == '' ? `` : `&health=${this.state.health}`;
        const calories = this.state.calories == '' ? `` : `&calories=${this.state.calories}`;
        const time = this.state.time == '' ? `` : `&time=${this.state.time}`;
        const diet = this.state.diet == '' ? `` : `&diet=${this.state.diet}`;
        const url = `${APIURL}&q=${this.state.search}${time}${dishType}${mealType}${cuisineType}${health}${calories}${diet}`;
        getSearchresult(url);
        if (this.state.search != "" && !this.state.searchedArr.includes(this.state.search)) {
            if (this.state.searchedArr.length >= 5) {
                this.setState({
                    searchedArr: this.state.searchedArr.reverse().shift()
                })
                var newState = this.state.searchedArr;
                newState.push(this.state.search);

                this.setState({
                    searchedArr: newState.reverse(),
                    submit: true
                })
            } else {
                this.setState({
                    searchedArr: this.state.searchedArr.concat(this.state.search).reverse(),
                    submit: true
                })
            }
        }
        this.setState({
            submit: true
        })
    }


    render() {
        const { searchResult, pending, error } = this.props;
        return (
            <div>
                <Helmet>
        <title>Recipe Search {this.state.search != ""?`- ${this.state.search}`:``}</title>
                </Helmet>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input name="search" type="text" className="form-control" placeholder={'Enter your search'} onChange={this.handleOnchange} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1">Cuisine Type:</label>
                            <select name="cuisineType" className="form-control" id="sel1" onChange={this.handleOnchange}>
                                <option value="">Select</option>
                                {cuisineType.map((key, val) => {
                                    return (<option value={key.value} key={key.value}>{key.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1">Meal Type:</label>
                            <select className="form-control" id="sel1" name="mealType" onChange={this.handleOnchange}>
                                <option value="">Select</option>
                                {mealType.map((key, val) => {
                                    return (<option value={key.value} key={key.value}>{key.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1">Dish Type:</label>
                            <select className="form-control" id="sel1" name="dishType" onChange={this.handleOnchange}>
                                <option value="">Select</option>
                                {dishType.map((key, val) => {
                                    return (<option value={key.value} key={key.value}>{key.name}</option>)
                                })}


                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1">Health:</label>
                            <select className="form-control" id="sel1" name="health" onChange={this.handleOnchange}>
                                <option value="">Select</option>
                                {health.map((key, val) => {
                                    return (<option value={key.value} key={key.value}>{key.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1">Calories:</label>
                            <select className="form-control" id="sel1" name="calories" onChange={this.handleOnchange}>
                                <option value="">Select</option>
                                {calories.map((key, val) => {
                                    return (<option value={key.value} key={key.value}>{key.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1">Time:</label>
                            <select className="form-control" id="sel1" name="time" onChange={this.handleOnchange}>
                                <option value="">Select</option>
                                {time.map((key, val) => {
                                    return (<option value={key.value} key={key.value}>{key.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1">Diet:</label>
                            <select className="form-control" id="sel1" name="diet" onChange={this.handleOnchange}>
                                <option value="">Select</option>
                                {diet.map((key, val) => {
                                    return (<option value={key.value} key={key.value}>{key.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="sel1" className="heightBlank"> </label>
                            <button type="submit" className="btn btn-primary form-control" disabled={pending ? 'disabled' : ''} onClick={this.handleSubmit}>Search</button>
                        </div>
                    </div>
                    <div className="col-md-12">
                        {this.state.searchedArr.map((key, val) => {
                            return (<span className="badge badge-secondary customBadge" key={key}>{key}</span>)
                        })}

                    </div>
                    <div className="col-md-12">
                        {pending && <LoaderComponent />}
                    </div>
                    <div className="col-md-12">
                        {(typeof error != "undefined" && error != "") && <p style={{ color: 'red' }}><strong>Error: </strong>{error}</p>}
                    </div>
                    <div className="col-md-12">
                        {searchResult && searchResult.map((key, val) => {
                            return (<Resultcard data={key} key={val}></Resultcard>)
                        })}

                        {searchResult.length == 0 && this.state.submit && !pending && <p>No search found</p>}

                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    const { groupCount, searchResult, pending, error } = state.search;
    return { groupCount, searchResult, pending, error };
}

const actionCreators = {
    getSearchresult: searchActions.getSearchresult
};

SearchComponent.propTypes = {}
export default connect(mapState, actionCreators)(SearchComponent);