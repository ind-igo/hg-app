import {
  GET_TRANSCRIPT
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case GET_TRANSCRIPT:
      return {
        ...state,
        transcript: action.payload
      }
    default:
      return state;
  }
}