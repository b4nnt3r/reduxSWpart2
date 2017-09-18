import React, {Component} from 'react';
// Import connect
import {connect} from 'react-redux';

// Import action <<<<<<<<<<<<<<<<<<<<<<<<<<<
// You will need to import the actions from '/actions'
// Write your code below:
import {
  filterWorlds,
  filterFilms,
  filterStarships,
  stateReset,
  setDetails
} from '../actions/index';

// Here we import the PeopleList component
import PeopleList from '../components/People';

// Important: don't forget to import 'bindActionsCreators'.
import {bindActionCreators} from 'redux';

class People extends Component {

  render() {
    console.log('REACT: Rendering People...', this.props)
    return (
      <div className="row">
        <div className="app-body offset col-lg-10 col-lg-offset-1">
          {/*State is now available via props thanks to Redux! <<<<<<<<<<<<<<<<*/}
          <PeopleList
            people={this.props.people}
            filterWorlds={this.props.filterWorlds}
            reset={this.props.stateReset}
            filterFilms={this.props.filterFilms}
            filterStarships={this.props.filterStarships}
            setDetails={this.props.setDetails}/>
        </div>
      </div>
    );
  }
}

// Here we map the component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  console.log('state', state)
  let data;
  if (state.people.filter.key === "homeworld") {
    let endpoint = state.people.filter.endpoint;
    let match = state.people.peopleData.filter((matchedWorlds) => {
      return matchedWorlds.homeworld === endpoint
    });
    data = match;
  } else if (state.people.filter.key === "film") {
    let endpoint = state.people.filter.endpoints;
    console.log('end', endpoint)
    let match = state.people.peopleData.filter((matchedFilms) => {
      let films = matchedFilms.films;
      return films.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;
  } else if (state.people.filter.key === "starship") {
    let endpoint = state.people.filter.endpoints;
    let match = state.people.peopleData.filter((matchedStarships) => {
      let starships = matchedStarships.starships;
      return starships.filter((item) => {
        return item;
      }).length === endpoint.length;
    });
    data = match;

  } else if (state.people.filter.key === "all") {
    data = state.people.peopleData;
  } else {
    data = state.people.peopleData;
  }
    return {
      people: data,
      stateExample: state.stateExample,
      setDetails: state.setDetails
    };
  }

// Here we map the component's actions <<<<<<<<<<<<<<<<<<<<<<<<<<
function mapDispatchToProps(dispatch) {
  // Whenever homeWorld is called, result should be passed to
  // All of the reducers. (flows through dispatch function -- like a funnel - finding the right reducer for the job).
  // In our return we are binding our action creators to the dispatch function that works behind the scenes for us.
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // bind the following action creators below (filterFilms, filterStarships, stateToggle and setDetails):
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  return bindActionCreators({
    filterWorlds: filterWorlds,
    filterFilms: filterFilms,
    filterStarships: filterStarships,
    stateReset: stateReset ,
    setDetails: setDetails
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(People);
