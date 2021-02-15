import { TranscriptStateType } from './types';
import {
  GET_TRANSCRIPT
} from '../events';

export const initialState = {
  transcript: '',
  getTranscript: (videoId: string) => Promise.resolve()
}

function Reducer(state: TranscriptStateType, action: any) {
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

export default Reducer;