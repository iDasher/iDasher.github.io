import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Image, Text } from '@chakra-ui/react'

function MyButton({ image, text, onClick}) {
  return (
    <Button colorScheme="red" size="md" onClick = {onClick}>
      <Flex alignItems="center">
        <Image src={image} alt="Icon" boxSize="24px" mr={2} />
        <Text>{text}</Text>
      </Flex>
    </Button>
  );
}

MyButton.propTypes = {
  image: PropTypes.string.isRequired, // Validate that the image prop is a string (URL) and is required
  text: PropTypes.string.isRequired, // Validate that the text prop is a string and is required
};

export default MyButton;