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
          {/*
          >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
          Share all the necessary filter actions with the child component. We did one for you...
          <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
          */}
          <PeopleList
            people={this.props.people}
            filterWorlds={this.props.filterWorlds}

            setDetails={this.props.setDetails} />
        </div>
      </div>
    );
  }
}

// Here we map the component's state <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mapStateToProps(state) {
  // What is returned will show up as PROPS inside of the PeopleList component.
  // Inside of this function we generally return an object.
  return {
    people: state.people,
    dataFilter: state.dataFilter,
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
  }, dispatch)
}

// Export mapDispatchToProps, mapDispatchToProps and People.
// You must use the 'connect' method to hook mapDispatchToProps and mapDispatchToProps to 'People.'
export default connect(mapStateToProps, mapDispatchToProps)(People);
