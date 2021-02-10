import React from 'react'
import {
  InputGroup,
  InputLeftElement,
  Input
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <FaSearch />
      </InputLeftElement>
      <Input placeholder="Enter a YouTube video link" />
    </InputGroup>
  );
};

export default SearchInput;
