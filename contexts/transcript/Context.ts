import { createContext } from 'react';
import type { TranscriptStateType } from './types';
import { initialState } from './Reducer';

const Context = createContext<TranscriptStateType>(initialState);

export default Context;