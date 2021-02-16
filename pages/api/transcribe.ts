// API endpoint to transcribe video
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  GetObjectRequest
} from '@aws-sdk/client-s3';
import { getTranscript } from 'services/youtube_transcriber';

const S3 = new S3Client({ region: 'us-east-1' });

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const videoId: string = req.query.v as string;
  const objectParams: GetObjectRequest = {
    Bucket: process.env.BUCKET_NAME,
    Key: videoId
  }

  //const uploadTranscript = (transcript_: string, objectParams_: HeadObjectRequest) => {
  //  try {
  //    S3.send(new PutObjectCommand({
  //      ...objectParams_,
  //      Body: transcript_,
  //      ContentType: 'application/text; charset=utf-8',
  //      CacheControl: 'max-age=86400'
  //    }));
  //    console.log(`Transcript ${videoId} successfully cached.`);
  //  } catch(err) {
  //    console.log(err);
  //  }
  //}

  let transcript: string | null;
  try {
    const cached = await S3.send(new GetObjectCommand(objectParams));
    transcript = await new Response(cached.Body as ReadableStream, {}).text();
  }
  catch(err) {
    console.log(`Transcript not cached: ${err.message}, transcribing...`);

    try {
      transcript = await getTranscript(videoId);
      //uploadTranscript(transcript, objectParams);
    }
    catch(err2) {
      console.error(`Transcription failed: ${err2.message}`);
      transcript = null;
    }
  }

  if(transcript) {
    res.status(200).json({
      message: 'Transcription Success',
      text: transcript
    });
  }
  else {
    res.status(404).json({
      message: 'Transcription Failed',
      text: null
    });
  }
}

export default handler;