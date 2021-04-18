
import movie from './movie';

export const getMovie = (title:string,moviesList:movie[]): movie[]|[] =>{
    let queriedMovies:movie[]= [];
    title = title.toLowerCase();
    queriedMovies = moviesList.filter((movieObject:movie)=>{
        return title.localeCompare(movieObject.Title, 'en', { sensitivity: 'base' })==0 ? true : false;
    });
    return queriedMovies;
}

export  const getListOfMovies = (pageNumber:number,moviesList:movie[]):movie[]=>{
    let arrayStartIndex:number;
    if((pageNumber-1)*10>moviesList.length) return[];
    else if(pageNumber*10>moviesList.length)return moviesList.slice((pageNumber-1)*10,moviesList.length-1);
    let queriedMovies:movie[]= moviesList.slice((pageNumber-1)*10,pageNumber*10);
    return queriedMovies;
}