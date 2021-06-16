import { Text ,Flex, Heading, HStack, VStack,Image} from '@chakra-ui/react'
import React from 'react'



const MovieCard = ({movie}) => {
    return (
        <Flex direction="column" w="100%" h="20%" margin="5px" borderWidth="2px" borderRadius="lg"  overflow="hidden" boxShadow="sm" _hover={{
            transition: "all 0.10s ease-out",
            boxShadow:" 0px 4px 8px rgba(38, 38, 38, 0.2)",
            borderWidth:"3px",
            borderColor:"twitter.500"
           }}>
          <Heading as="h3" margin="10px">{movie.Title}</Heading>
          <HStack w="100%" margin="10px">
              <Text>available on : </Text>
              {
                movie.Netflix==1 &&
                <Image  boxSize="40px"
                      objectFit="cover"
                      src="Netflix.png"
                      alt="netflix">
             </Image>
              }
              {
                movie.Hulu==1 &&
                <Image  boxSize="50px"
                objectFit="cover"
                src="hulu.png"
                alt="hulu">
                </Image>
              }
             {
                movie['Disney+']==1 &&
                <Image  boxSize="50px"
                objectFit="cover"
                src="disney_plus.png"
                alt="disney plus">
                </Image>
             }
            {
                movie['Prime Video']==1 &&
                <Image  boxSize="50px"
                objectFit="cover"
                src="prime-video.png"
                 alt="prime-video">
                </Image>
            }

          </HStack>
          <HStack w="100%">
              <VStack w="50%" spacing="10px">
                <Text>year: {movie.Year}</Text>
                <Text>ImDB: {movie.IMDb}</Text>
                <Text>directors: {movie.Directors}</Text>
              </VStack>
              <VStack w="50%" spacing="10px">
              <Text>genres : {movie.Genres}</Text>
              <Text>Runtimle  : {movie.Runtime}</Text>
              <Text></Text>
              </VStack>
          </HStack>
           </Flex>
    )
}

export default MovieCard
