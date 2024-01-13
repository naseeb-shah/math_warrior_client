
import { Box, Center, Divider, Heading,Text,VStack ,HStack, Spacer,Stack,StackDivider,Card,CardHeader,CardBody} from "@chakra-ui/react"
import { ProblemCard } from "../components/problemcard"
import { useEffect, useState } from "react"
import { getProfile,getToken } from "../utils/api"
import { useNavigate } from "react-router-dom"
export  const Home=()=>{
  const [data,setData]=useState({})
  const navigate=useNavigate()
  useEffect(()=>{
    async function getProfile2(){
      let result= await getProfile()
      setData(result)

    }
    getProfile2()
  },[])
  let token= getToken()
  if (!token) {
    // Redirect to login if token is not available
    return navigate("/login")
  }



   
 



    return <Box textAlign="center">
  
    
   {data?.userId&& <AttendanceDetails  data={data}/>}
   
  </Box>
}



const AttendanceDetails = ({ data }) => {
  const {
    _id,
    userId,
    addition,
    subtract,
    divide,
    multiplication,
    wrongProblems,
    createdAt,
    updatedAt,
    username
  } = data;

  return (
    <>
    <Center>
    <Card>
  <CardHeader>
    <Heading size='md'>Report</Heading>
  </CardHeader>

  <CardBody>
    <HStack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Addition
        </Heading>
        <Text pt='2' fontSize='sm'>
          Total Problem {addition.num}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Subtract
        </Heading>
        <Text pt='2' fontSize='sm'>
        Total Problem {subtract.num}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Divide
        </Heading>
        <Text pt='2' fontSize='sm'>
        Total Problem {divide.num}        </Text>
      </Box>

      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Multiplication
        </Heading>
        <Text pt='2' fontSize='sm'>
        Total Problem {multiplication.num}        </Text>
      </Box>



    </HStack>
  </CardBody>
</Card>
</Center>
<Center>
<HStack mt={25} divider={<StackDivider />}  spacing='4' boxShadow={'lg'} p={4} borderRadius={5}>
{
wrongProblems.map((e)=><Box  >
<Heading size='xs' textTransform='uppercase'>
  {e.type=="+"?"Add":e.type=="-"?"Subtract":e.type=="*"?"Multiplication":"Divide"}
</Heading>
<Text pt='2' fontSize='sm'>
  {e?.num}
       </Text>
       <Text pt='2' fontSize='sm'>
        {e.num2}
       </Text>
</Box>)


}

</HStack>
</Center>
</>
  );
};

export default AttendanceDetails;
