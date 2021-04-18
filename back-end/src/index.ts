import express from 'express';
const moviesList= require(__dirname+'/movies.json')
import movie from './movie';
import {getMovie,getListOfMovies} from './queryFunctions';


const app = express()

app.get("/searchMovie/:movieTitle",(req, res)=>{
    //res.send('heyyyyy this is typescript')
    console.log("param  "+req.params.movieTitle)
    let result = getMovie(req.params.movieTitle,moviesList)
    console.log(result)
    res.send(result)
});

app.get("/movies/:pageNumber",(req, res)=>{
    //res.send('heyyyyy this is typescript')
    console.log("param  "+req.params.pageNumber)
    let result = getListOfMovies(parseInt(req.params.pageNumber),moviesList)
    console.log(result)
    res.send(result)
});


app.listen(5000,()=>console.log("server running"))

