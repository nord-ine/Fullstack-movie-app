import './App.css';
import { Button, Container, Heading, HStack,Input, VStack,Text} from '@chakra-ui/react';
import MovieCard from './components/MovieCard';
import {useState,useEffect} from 'react';

function App() {

  const [searchMovie, setsearchMovie] = useState("")

  const [movies, setmovies] = useState([]);

 const [url, seturl] = useState("http://localhost:5000/movies/1")


 useEffect(() => {

  async function getData(){
    const response  = await fetch(url);
    const data = await response.json();
    setmovies(data);
    console.log(data[0].Title);
  };

  getData();
   
 }, [url])

  function handleSearchChange(event){
    setsearchMovie(event.target.value)
  }
  function handleSearchMovieSubmit(){
    console.log("submit search   " + searchMovie);
    seturl(`http://localhost:5000/searchMovie/${searchMovie}`)
    setsearchMovie("");
  }

  function handleSearchAllMoviesSubmit(){
    console.log("submit search all movies ");

  }

  return (
    <Container align="center" justifyContent="center" w="100%">
      <VStack spacing="40px" align="center" justifyContent="center" w="100%">
        <Heading as="h2" color="twitter.500"> movie Search App</Heading>
        <HStack spacing="20px">
        <Input placeholder="search  movie" value={searchMovie} onChange={handleSearchChange}/>
        <Button color="twitter.500" onClick={handleSearchMovieSubmit}>search</Button>
        <Button color="twitter.500" width="100%" onClick={handleSearchAllMoviesSubmit}>show all the movies</Button>
        </HStack>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <Text>{movies.length!=0 && movies[0].Title}</Text>
        <Button>next page</Button>
      </VStack>
    </Container>
  );
}

export default App;
