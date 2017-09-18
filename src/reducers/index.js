import {combineReducers} from 'redux';
import * as ActionTypes from '../actionTypes/actions';
import update from 'immutability-helper';

import PeopleData from '../data/Peopledata';
import FilmsData from '../data/Filmsdata';
import StarshipsData from '../data/Starshipsdata';

const initialState = {
  filter: 'all',
  peopleData: PeopleData(),
  filmsData: FilmsData(),
  starshipsData: StarshipsData()
}

function details(state = {}, action) {
  switch (action.type) {
    case ActionTypes.DETAILS:
      return action.payload.data

    default:
      return state;
  }
}

function PeopleDataFilter(state = initialState, action) {
  switch (action.type) {
    //CREATE CASES FOR FILTER_WORLDS, FILTER_FILMS, FILTER_STARSHIPS, RESET.
    // Set the state of 'filter' to the action's payload for each.


    default:
      return state
  }
}

const rootReducer = combineReducers({people: PeopleDataFilter, films: FilmsData, starships: StarshipsData, details: details});

export default rootReducer;
