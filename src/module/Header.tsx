import React from 'react';
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Spacer,
} from '@chakra-ui/react';
import {
  Brand,
  CallToAction,
  HamburgerMenu,
  Navbar,
} from '../common/components';

export const Header = () => {
  const [offsetTop, setOffsetTop] = React.useState(0);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const headerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (headerRef.current) {
      setOffsetTop(headerRef.current.clientHeight);
    }
  }, []);
  return (
    <Box
      ref={headerRef}
      as="header"
      bg="brand.primary"
      color="white"
      py={[4, null, 6, 8]}
      position="sticky"
      top="0"
      zIndex="1"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <IconButton
            display={['block', null, 'none']}
            bg="brand.primary"
            aria-label="Toggle Menu"
            icon={<HamburgerMenu show={toggleMenu} />}
            onClick={() => setToggleMenu(!toggleMenu)}
            _focus={{ boxShadow: 'none' }}
            _hover={{ bg: 'brand.primary' }}
            _active={{ bg: 'brand.primary' }}
          />
          <Spacer display={['block', null, 'none']} />
          <Brand />
          <Spacer />
          <Navbar show={toggleMenu} offsetTop={offsetTop} />
          <CallToAction />
          <Link display={['block', null, 'none']}>Login</Link>
        </Flex>
      </Container>
    </Box>
  );
};
