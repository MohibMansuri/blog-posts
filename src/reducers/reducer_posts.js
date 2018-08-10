import {FETCH_POSTS, FETCH_POST, DELETE_POST, CREATE_POSTS} from '../actions/index';
import _ from 'lodash';

export default function(state={}, action) {
  console.log('payload:', action.payload);
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case CREATE_POSTS:
    case FETCH_POST:
      return {...state, [action.payload.data.id]: action.payload.data};
  };
  return state;
}
