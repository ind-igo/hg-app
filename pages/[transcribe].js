import { Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'

// TODO Grab transcript text from transcript context

const Transcribe = () => {
  const [videoId, setVideoId] = useState(); // TODO replace with context call
  const router = useRouter();


  useEffect(() => {
    setVideoId(router.query.v)
    if(!videoId) router.push('/');
  }, [router.query.v])

  return (
    <Container>
    </Container>
  )
}

export default Transcribe;
