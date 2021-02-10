// Transcriber. Grabs transcript from Youtube
import { getSubtitles } from 'youtube-captions-scraper';
import axios from 'axios';
import qs from 'qs';

interface subtitleObject {
  start: string,
  stop: string,
  text: string
}

export async function getTranscript(videoId_: string) {
  try {
    const subtitles: Array<subtitleObject> = await getSubtitles({videoID: videoId_, lang: 'en'});
    const rawTranscript = formatSubtitles(subtitles);
    // TODO replace with https address of own model
    // TODO Push to queue to be transcribed, return "ok" immediately
    const punctuated = await axios.post(
      process.env.HG_PUNCTUATOR_URL as string,
      qs.stringify({
        text: rawTranscript
      })
    );
    let finalTranscript = punctuated.data as string;
    return Promise.resolve(finalTranscript);
  } catch(err) {
    console.log(err);
    return Promise.reject('No Transcript Available.');
  }
}

function formatSubtitles(subtitles_: Array<subtitleObject>) {
  if (!subtitles_.length) return null;
	return subtitles_
    .map((element) => element.text)
    .join(' ')
    .replace(/\n/gm, ' ')
    .trim();
}