// Export all contexts as hooks here

import { useContext } from 'react';

import { TranscriptContext } from './transcript';

export const useTranscript = () => ({ ...useContext(TranscriptContext) });