import {
  Heading,
  Divider,
  Text,
  VStack,
  Flex
} from '@chakra-ui/react';
import ColumnarLayout from '../components/layout/ColumnarLayout';

const About = () => {
  return (
    <ColumnarLayout fontSize="xl">
      <Flex
       direction="column"
       minH="70vh"
       px={8}
       mb={16}
      >
        <Heading>About</Heading>
        <Divider pt={4} />
        <Text pt={4}>
          Hieroglyph is a research tool to easily view a Youtube video's transcript.
        </Text>
        <Heading pt={12}>Frequently Asked Questions</Heading>
        <Divider pt={4} />
        <Heading pt={4} size="lg">
          Q: How does Hieroglyph work?
        </Heading>
        <Text pt={4}>
          Youtube automatically transcribes most videos. We grab the transcriptions off of Youtube, format it, and give you a readable version.
        </Text>
        <Heading pt={4} size="lg">
          Q: I am getting a 'No transcript available' error. What's going on?
        </Heading>
        <Text pt={4}>
          It is likely Youtube has not transcribed the video yet.
          If there are transcripts on the video and Hieroglyph does not work, then please contact us.
        </Text>
      </Flex>
    </ColumnarLayout>
  );
};

export default About;