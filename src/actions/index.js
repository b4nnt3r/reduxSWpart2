import * as ActionTypes from '../actionTypes/actions';
// The above import takes care of importing all action types.


export const setDetails = (data) => {
  return {
    type: ActionTypes.DETAILS,
    payload: {data}
  };
};

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// Using the above function as a guide, author the four action functions needed
// to handle the four action types you just authored. These functions should receive
// two parameters: endpoint and key.
// The endpoint will be either one endpoint or an array of endpoint.
// The key will be a string. Your filter should sort out by 'homeworld', 'film', 'starship'
// You will pass the endpoint and keys in the appropiate function calls in the people.js component
// Use the following names: filterWorlds, filterFilms, filterStarships, stateReset

// 'stateReset' does not need any parameters and payload.

// The purpose of these actions (and their reducers) is to make it possible for a user,
// to sort out all of the characters by similar worlds, films, and starships.
// For example: If Luke Skywalker appears in movies 1, 2, 3, then the films filter should
// filter all the characters that appear on any of those fimls.

// Write your code below:
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export const filterWorlds = (endpoint, key) => {
  return {
    type: ActionTypes.FILTER_WORLDS,
    payload: {endpoint, key}
  };
};

export const filterFilms = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_FILMS,
    payload: {endpoints: endpoint, key}
  };
};

export const filterStarships = (endpoint, key) => {
  endpoint.map((endpoint)=>{
    return endpoint.key
  })
  return {
    type: ActionTypes.FILTER_STARSHIPS,
    payload: {endpoints: endpoint, key}
  };
};

export const stateReset = (key) => {
  return {
    type: ActionTypes.RESET,
    payload: {key}
  };
};
