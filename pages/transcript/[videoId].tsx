import { useContext, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { TranscriptContext } from 'contexts/transcript';
import { useTranscript } from 'contexts';

/*
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { getTranscript, transcript } = useContext(TranscriptContext);
  // TODO validation on query
  const { videoId } = context.query;

  await getTranscript(videoId as string);

  if(!transcript) return { notFound: true };

  return {
    props: {
      transcript: transcript,
    }
  }
}
*/

//const Transcribe: React.FC = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
const Transcript: React.FC = () => {
  const { transcript, fetchTranscript } = useContext(TranscriptContext)//useTranscript();
  const router = useRouter();
  const { videoId } = router.query;

  useEffect(() => {
    if(videoId) (async () => await fetchTranscript(router.query.videoId as string))();
  }, [videoId]);

  return (
    <Container>
      { transcript }
    </Container>
  )
}

export default Transcript;
