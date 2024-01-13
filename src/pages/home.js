
import { Box, Heading } from "@chakra-ui/react"
import { ProblemCard } from "../components/problemcard"

export  const Home=()=>{

    
 



    return <Box textAlign="center">
    <Heading m="auto" alignSelf="center">
      Home
    </Heading>
    <Box >
      <Heading>Problem</Heading>

      
        <ProblemCard type={"*"}  ></ProblemCard>
      
      
    </Box>
  </Box>
}