import { useReducer } from 'react';
import axios from 'axios';
import TranscriptContext from './transcriptContext';
import transcriptReducer from './transcriptReducer';
import { GET_TRANSCRIPT, TRANSCRIPT_ERROR } from '../types';

const TranscriptState = (props) => {
  const initialState = {
    transcript: null
  };

  const [state, dispatch] = useReducer(transcriptReducer, initialState);

  const getTranscript = async (videoId) => {
    /*
    try {
      const res = await axios.get(`/api/transcribe?v=${videoId}`); TODO
      dispatch({
        type: GET_TRANSCRIPT,
        payload: res.data
      });
    } catch(err) {
      dispatch({
        type: TRANSCRIPT_ERROR,
        payload: err.response.msg
      });
    }
    */
  }

  return (
    <TranscriptContext.Provider value={{
      transcript: state.transcript,
      getTranscript
    }}>
      {props.children}
    </TranscriptContext.Provider>
  )
}

export default TranscriptState;