import { Text ,Flex, Heading, HStack, VStack} from '@chakra-ui/layout'
import React from 'react'

const MovieCard = ({movie}) => {
    return (
        <Flex direction="column" w="100%" h="20%" margin="5px" borderWidth="2px" borderRadius="lg"  overflow="hidden" boxShadow="sm" _hover={{
            transition: "all 0.10s ease-out",
            boxShadow:" 0px 4px 8px rgba(38, 38, 38, 0.2)",
            borderWidth:"3px",
            borderColor:"twitter.500"
           }}>
          <Heading as="h3" margin="10px">Title</Heading>
          <HStack w="100%" margin="10px">
              <Text>available on : </Text>
              
          </HStack>
          <HStack w="100%">
              <VStack w="50%" spacing="10px">
                <Text> year</Text>
                <Text>ImDB</Text>
                <Text>directors</Text>
              </VStack>
              <VStack w="50%" spacing="10px">
              <Text>genres : </Text>
              <Text>Runtimle  : </Text>
              <Text></Text>
              </VStack>
          </HStack>
           </Flex>
    )
}

export default MovieCard
