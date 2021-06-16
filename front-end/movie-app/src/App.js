import './App.css';
import { Button, Container, Heading, HStack,Input, VStack,Tag} from '@chakra-ui/react';
import MovieCard from './components/MovieCard';
import {useState,useEffect} from 'react';

function App() {

  const [searchMovie, setsearchMovie] = useState("")

  const [movies, setmovies] = useState([]);

 const [url, seturl] = useState("http://localhost:5000/movies/1")

 const [pageNumber, setpageNumber] = useState(1)

 const [showpagebuttons, setshowpagebuttons] = useState(true);

 useEffect(() => {
  seturl(`http://localhost:5000/movies/${pageNumber}`)
 }, [pageNumber])

 useEffect(() => {

  async function getData(){
    const response  = await fetch(url);
    const data = await response.json();
    setmovies(data);
    //console.log(data);
  };

  getData();
   
 },[url])

  function handleSearchChange(event){
    setsearchMovie(event.target.value)
  }
  function handleSearchMovieSubmit(){
    console.log("submit search   " + searchMovie);
    seturl(`http://localhost:5000/searchMovie/${searchMovie}`)
    setsearchMovie("");
    setshowpagebuttons(false);
  }

  function handleSearchAllMoviesSubmit(){
    console.log("submit search all movies ");
    setpageNumber(1);
    seturl("http://localhost:5000/movies/1");
    setshowpagebuttons(true);
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
        {
         movies.length===0?
         <Heading as="h4" color="red.300">no movies found </Heading>:
          movies.map(movie=><MovieCard key={movie.ID} movie={movie}/>)
        }

        { showpagebuttons &&
          <HStack>
          <Button onClick={()=>setpageNumber(pageNumber-1)} isDisabled={pageNumber<=1}>previous page</Button>
          <Tag variant="solid" colorScheme="teal" >
            {pageNumber}
          </Tag>
          <Button onClick={()=>setpageNumber(pageNumber+1)}>next page</Button>
      </HStack>
        }
        
      
      </VStack>
    </Container>
  );
}

export default App;
