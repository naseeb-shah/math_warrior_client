import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedBox = motion(Box);

const CongratulationsMessage = () => {
  const controls = useAnimation();

  const animateMessage = async () => {
    await controls.start({ opacity: 1, y: 0 });
    await controls.start({ scale: 1.2 });
    await controls.start({ scale: 1 });
  };

  React.useEffect(() => {
    animateMessage();
  }, []); // Run the animation once when the component mounts

  return (
    <AnimatedBox
    position={"fixed"}
    
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      textAlign="center"
      p={4}
    >
      <Heading as="h2" size="xl" mb={2} color="green.500">
        Congratulations!
      </Heading>
      <Text fontSize="lg">
        You've achieved something amazing. Well done!
      </Text>
    </AnimatedBox>
  );
};

export default CongratulationsMessage;
