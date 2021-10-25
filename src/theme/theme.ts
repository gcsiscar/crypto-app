import { extendTheme } from '@chakra-ui/react';

const Button = {
  baseStyle: {
    fontWeight: '500',
    borderRadius: '2rem',
  },
  sizes: {
    md: {
      fontSize: '1rem',
      padding: '1em 1.5em',
    },
  },
  variants: {
    primary: {
      bg: 'brand.accent',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};

export const theme = extendTheme({
  components: {
    Button,
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
