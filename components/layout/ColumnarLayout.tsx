import { Flex } from '@chakra-ui/react';

const ColumnarLayout: React.FC = (props) => {
  return (
    <Flex
      direction="column"
      maxW={{
        base: "auto",
        xl: "1200px"
      }}
      m="0 auto"
      p="8"
      {...props}
    >
    </Flex>
  )
}

export default ColumnarLayout;