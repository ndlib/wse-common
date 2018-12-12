import { createStore, combineReducers } from 'redux';

// create a couple of reducers
function firstReducer(state = [], action) {
  switch (action.type) {
    case 'updateOrg':
      return action.org;
    default:
      return state;
  }
}

function secondReducer(state = [], action) {
  switch (action.type) {
    case 'updatePerson':
      return action.person;
    default:
      return state;
  }
}

// combine the reducers into a root reducer
const allReducers = combineReducers({
  person: secondReducer,
  org: firstReducer
});

// initialize the store
// this assumes you are using the Redux plugin
const store = createStore(
  allReducers,
  {
    person: [{ name: "Jim"}],
    org: 'Org One'
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// create a couple of simple actions
const updateOrgAction = {
  type: 'updateOrg',
   org: 'Org Two'
};

const updatePersonAction = {
  type: 'updatePerson',
  person: { name: "Fred" }
}

// call the actions to update the store
store.dispatch(updateOrgAction);
store.dispatch(updatePersonAction);
