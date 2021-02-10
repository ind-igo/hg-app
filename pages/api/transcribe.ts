// API endpoint to transcribe video
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  S3Client,
  HeadObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  HeadObjectRequest
} from '@aws-sdk/client-s3';
import { getTranscript } from 'services/youtube_transcriber';

const S3 = new S3Client({ region: 'us-east-1' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const videoId: string = req.query.v as string;
  const objectParams: HeadObjectRequest = {
    Bucket: process.env.BUCKET_NAME,
    Key: videoId
  }

  const uploadTranscript = (transcript_: string, objectParams_: HeadObjectRequest) => {
    try {
      S3.send(new PutObjectCommand({
        ...objectParams_,
        Body: transcript_,
        ContentType: 'application/text; charset=utf-8',
        CacheControl: 'max-age=86400'
      }));
      console.log(`Transcript ${videoId} successfully cached.`);
    } catch(err) {
      console.log(err);
    }
  }

  let transcript: string | null;
  try {
    transcript = (await S3.send(new GetObjectCommand(objectParams))).Body?.toString() as string;
  }
  catch(err) {
    console.log(`Transcript not cached: ${err.message}, transcribing...`);

    try {
      transcript = await getTranscript(videoId);
    }
    catch(err2) {
      console.error(`Transcription failed: ${err2.message}`);
      transcript = null;
    }
  }

  if(transcript) {
    uploadTranscript(transcript, objectParams);

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