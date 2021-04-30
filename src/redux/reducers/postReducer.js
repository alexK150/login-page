import {FETCH_POSTS, ADD_POST} from "../actions/types";

const initialState = {
  posts: [],
  post: {}
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case ADD_POST: {
      console.log(action.payload)
      return {
        ...state,
        post: action.payload
      }
    }
    default:
      return state;
  }
}