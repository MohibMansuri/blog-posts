import {FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POSTS} from '../actions/index';
import _ from 'lodash';

export default function(state={}, action) {
  switch (action.type) {
    case CREATE_POSTS:
      console.log('payload:', action.payload);
      //const newState = {...state, [action.payload.id]: action.payload};
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data};
  };
  return state;
}
