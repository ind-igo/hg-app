import { TranscriptStateType } from './types';
import {
  GET_TRANSCRIPT
} from '../events';

export const initialState = {
  transcript: '',
  fetchTranscript: (videoId: string) => Promise.resolve()
}

// TODO Actions still untyped. Ideas for improvements:
//  https://blog.usejournal.com/writing-better-reducers-with-react-and-typescript-3-4-30697b926ada
//  https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
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