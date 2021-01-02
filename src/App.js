import React from 'react';
import logo from './logo.svg';
import './App.css';
import { searchActions } from './_actions';
import { connect } from 'react-redux';
import SearchComponent from './_components/search';
class App extends React.Component {

  constructor(props) {
    super(props);
  }
  updateState = () => {
    const { Updatesearchid } = this.props;
    var RANDVAL = Math.random(0, 5000);
    Updatesearchid(RANDVAL);
  }
  render() {
    const { groupCount } = this.props;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={logo} className="App-logo" />
            </div>
          </div>
          <SearchComponent />
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { groupCount } = state.search;
  return { groupCount };
}

const actionCreators = {
  Updatesearchid: searchActions.Updatesearchid,
};


export default connect(mapState, actionCreators)(App);
