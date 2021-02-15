import { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import { default as Reducer, initialState } from './Reducer';
import { GET_TRANSCRIPT, TRANSCRIPT_ERROR } from 'context/events';

const Provider: React.FC = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getTranscript = async (videoId: string) => {
    try {
      const res = await axios.get(`/api/transcribe?v=${videoId}`); // TODO
      dispatch({
        type: GET_TRANSCRIPT,
        payload: res.data
      });
    }
    catch(err) {
      dispatch({
        type: TRANSCRIPT_ERROR,
        payload: err.response.msg
      });
    }
  }

  return (
    <Context.Provider value={{
      transcript: state.transcript,
      getTranscript
    }}>
      {props.children}
    </Context.Provider>
  )
}

export default Provider;