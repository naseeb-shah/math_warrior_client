// components/Login.js
import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack,Spinner } from '@chakra-ui/react';
import { logIn } from '../utils/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
      try{
        await logIn(data)

        navigate('/')
      }catch(e){

      }
       setLoading(false)
    }
  return (
    <Box p={4}>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" name='email' onChange={handleInput} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" onChange={handleInput} />
          </FormControl>
          { loading?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>:   <Button type="submit" colorScheme="teal" mt={4}>
            Log In
          </Button>}
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
