import React from 'react';
import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

export interface CryptoCardProps extends BoxProps {
  icon: string;
  name: string;
  abbr: string;
  desc: string;
}

export const CryptoCard = ({
  icon,
  name,
  abbr,
  desc,
  ...props
}: CryptoCardProps) => {
  return (
    <Box
      bg="#fff"
      borderRadius="1rem"
      color="brand.primary"
      backdropFilter="blur(250px)"
      boxShadow="0 0.25rem 2rem rgba(57,23,119, 0.1)"
      py={12}
      px={6}
      _hover={{
        bg: 'brand.secondary',
        color: '#fff',
      }}
      sx={{
        '&:hover .desc': {
          color: '#fff',
        },
        '&:hover .btn': {
          bg: 'brand.accent',
        },
        '&:hover .abbr': {
          color: '#fff',
          opacity: 0.7,
        },
      }}
      {...props}
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Box mb={10}>
          <Image src={icon} alt="Icon" />
        </Box>
        <HStack spacing={2} mb={4}>
          <Heading>{name}</Heading>
          <Text className="abbr" color="#8D8D8D" fontWeight="medium">
            {abbr}
          </Text>
        </HStack>
        <Text className="desc" color="#828282" mb={6}>
          {desc}
        </Text>
        <Button className="btn">Start mining</Button>
      </Flex>
    </Box>
  );
};

// <Circle
//   width="64px"
//   height="64px"
//   border="2px solid rgba(43, 7, 110, 0.2);"
// >
//   <Image src={arrowIcon} width="100%" height="100%" />
// </Circle>
