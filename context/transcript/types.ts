export interface TranscriptStateType {
  transcript: string,
  getTranscript: (videoId: string) => Promise<void>
}