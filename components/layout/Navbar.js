import NextLink from 'next/link';
import {
  Flex,
  Button,
  Stack,
  Heading,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer
} from '@chakra-ui/react';
import { FaTwitter, FaSearch } from 'react-icons/fa';
import SearchInput from '../ui/SearchInput';

const Navbar = (props) => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={2}
      {...props}
    >
      <Box flex="1">
        <NextLink href='/' passHref>
          <Heading m={2}>Hieroglyph</Heading>
        </NextLink>
      </Box>
      <Box flex="1">
        <SearchInput />
      </Box>
      <Flex
        direction={["column", "row", "row", "row"]}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        alignItems="stretch"
        flex="1"
      >
        <NextLink href='/about' passHref>
          <Button variant="solid" size="md" m={2}>
            About
          </Button>
        </NextLink>
        <NextLink href='/about' passHref>
          <Button variant="solid" size="md" m={2}>
            Feedback
          </Button>
        </NextLink>
        <NextLink href='https://twitter.com/HieroglyphApp'>
          <Button variant="solid" size="md" m={2} leftIcon={<FaTwitter />}>
            Twitter
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  )
}

export default Navbar;