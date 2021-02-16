import { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import { default as Reducer, initialState } from './Reducer';
import {
  GET_TRANSCRIPT,
  TRANSCRIPT_ERROR
} from 'contexts/events';

const Provider: React.FC = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);


  const fetchTranscript = async (videoId: string) => {
    if(typeof videoId === 'undefined') return;
    try {
      const res = await axios.get(`http://localhost:3000/api/transcribe?v=${videoId}`); // TODO validate
      const { message, text } = res.data;

      if(text) {
        dispatch({
          type: GET_TRANSCRIPT,
          payload: text
        });
      }
      else {
        dispatch({
          type: TRANSCRIPT_ERROR,
          payload: message
        })
      }
    }
    catch(err) {
      console.error(err.message);
      dispatch({
        type: TRANSCRIPT_ERROR,
        payload: err.message
      });
    }
  }

  return (
    <Context.Provider value={{
      transcript: state.transcript,
      fetchTranscript
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider;