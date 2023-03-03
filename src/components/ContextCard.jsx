import { useEffect, useState } from "react";
import {get} from "../data/httpClient";
import { MovieCard } from "./MovieCard";
import  ContextCss  from "./ContextCss.css";

export function ContextCard(){
    const [movies, SetMovies] = useState([]);

    useEffect(()=>{
        get("discover/movie").then((data)=>{
            SetMovies(data.results);
            console.log(data)
        });
    }, []); //con los [] se le dice al comando busqueda que se ejecute 1 sola vez
    return(<ul className="container">
        {movies.map((movie)=>{
            <MovieCard key={movie.id}  movie={movie}/>
        })}
    </ul>
    );
}   