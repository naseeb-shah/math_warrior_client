// components/Signup.js
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack ,Spinner, position} from '@chakra-ui/react';
import {registerUser} from  "../utils/api"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate= useNavigate()

  const [loading,setLoading]=useState(false)
const [data,setData]=useState({
  username:'',
  email:"",
  password:''
})
 const handleInput=(e)=>{
  const {value,name}=e.target
  setData({...data,[name]:value})
 }
  const handleLogin=async(e)=>{
    setLoading(true)
    e.preventDefault()
     await registerUser(data)
     setLoading(false)
     navigate('/login')
  }
  
  return (
    <Box p={4}>
    
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input type="text" name='username' onChange={handleInput} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name='email' onChange={handleInput} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" name='password' onChange={handleInput} />
          </FormControl>
         { loading?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>:<Button type="submit" colorScheme="teal" mt={4}>
            Sign Up
          </Button>
}        </Stack>
      </form>
    </Box>
  );
};

export default Signup;
