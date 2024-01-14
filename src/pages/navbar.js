import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Link,
  Spacer,
  IconButton,
  Box,
  HStack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { getToken } from '../utils/api';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
 let token=getToken()
 let username=localStorage.getItem("username")

 const logOut=()=>{
  localStorage.removeItem("username")
  localStorage.removeItem("token")
 }
 
  return (
    <Flex p={4} bg="teal.500" color="white">
      <IconButton
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onOpen}
        display={{ base: 'block', md: 'none' }}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              <HStack spacing={4} flexDirection="column">
                <Link as={RouterLink} to="/" fontSize="lg" mb={2}>
                  Home
                </Link>
                <Link as={RouterLink} to="/add" fontSize="lg" mb={2}>
                  Addition
                </Link>
                <Link as={RouterLink} to="/multi" fontSize="lg" mb={2}>
                  Multiplication
                </Link>
                <Link as={RouterLink} to="/sub" fontSize="lg" mb={2}>
                  Subtract
                </Link>
                <Link as={RouterLink} to="/div" fontSize="lg" mb={2}>
                  Divide
                </Link>
             { !token&&!username ? <Link as={RouterLink} to="/login" fontSize="lg" mb={2}>
                  Login
                </Link>: <Link as={'p'}  fontSize="lg" mb={2}>
                  {username}
                </Link>}

             { !token&&!username ?  <Link as={RouterLink} to="/signup" fontSize="lg" mb={2}>
                  Signup
                </Link>: <Button as={'button'}  fontSize="lg" mb={2} onClick={logOut}>
                  Log Out
                </Button>}
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Box display={{ base: 'none', md: 'block' }}>
        <Link as={RouterLink} to="/" fontSize="lg" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/add" fontSize="lg" mr={4}>
          Addition
        </Link>
        <Link as={RouterLink} to="/multi" fontSize="lg" mr={4}>
          Multiplication
        </Link>
        <Link as={RouterLink} to="/sub" fontSize="lg" mr={4}>
          Subtract
        </Link>
        <Link as={RouterLink} to="/div" fontSize="lg" mr={4}>
          Divide
        </Link>
      </Box>
      <Spacer />
      { !token&&!username ? <Link as={RouterLink} to="/login" fontSize="lg" mb={2}>
                  Login
                </Link>: <Link as={'p'}  fontSize="lg" mb={2}>
                  {username}
                </Link>}

             { !token&&!username ?  <Link as={RouterLink} to="/signup" fontSize="lg" mb={2}>
                  Signup
                </Link>: <Button as={'button'} ml={5}  fontSize="lg" mb={2} onClick={logOut}>
                  Log Out
                </Button>}
    </Flex>
  );
};

export default NavBar;
