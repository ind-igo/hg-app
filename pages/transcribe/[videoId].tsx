import { Container } from '@chakra-ui/react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { videoId } = context.query;

  const data = await axios
    .get(`/api/transcribe?v=${videoId}`)
    .then(res => res.data);

  if(!data) return { notFound: true };

  return {
    props: {
      transcript: data.text,
    }
  }
}

const Transcribe: React.FC = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { transcript } = props

  return (
    <Container>
      { transcript }
    </Container>
  )
}

export default Transcribe;
