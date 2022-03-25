import { extendTheme } from '@chakra-ui/react';

// button common size is 18px and one 16px
const Button = {
  baseStyle: {
    borderRadius: 'full',
    fontWeight: 'medium',
    _focus: {
      boxShadow: 'none',
    },
  },
};

const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
    },
  },
};

const Heading = {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    sm: {
      fontSize: '2rem',
      lineHeight: '1.5',
    },
    md: {
      fontSize: '2.5rem',
      lineHeight: '1.5',
    },
    lg: {
      fontSize: '4rem',
    },
  },
  defaultProps: {
    size: 'md',
  },
};

const Text = {
  baseStyle: {
    lineHeight: '1.75',
  },
};

export const theme = extendTheme({
  components: {
    Button,
    Link,
    Heading,
    Text,
  },
  colors: {
    brand: {
      primary: '#0D0D2B',
      secondary: '#2B076E',
      accent: '#3671E9',
    },
  },
  fonts: {
    body: 'Rubik, sans-serif',
    heading: 'Rubik, sans-serif',
  },
});
