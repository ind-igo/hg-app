import {
  Heading,
  Divider,
  Text,
  VStack,
  Flex
} from '@chakra-ui/react';
import StandardLayout from '../components/layout/StandardLayout';

const About = () => {
  return (
    <StandardLayout px={12} fontSize="xl">
      <Heading pl={8}>About</Heading>
      <Divider pt={4} />
      <Text pt={4}>
        Hieroglyph is a research tool to easily view a Youtube video's transcript.
      </Text>
      <Text>
        For comments, suggestions or inquiries, please DM us on Twitter.
      </Text>
      <Heading px={8} pt={4}>Frequently Asked Questions</Heading>
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
        If the video is brand new, its likely Youtube has not transcribed the video yet.
        If there are transcripts on the video and Hieroglyph does not work, then please contact us.
      </Text>
    </StandardLayout>
  );
};

export default About;