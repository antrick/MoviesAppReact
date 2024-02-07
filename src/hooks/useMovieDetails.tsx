import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetail{
    isLoading: boolean;
    movieFull?: MovieFull
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetail>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () =>{
        const detailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
        const [ moviesDetailsResp , castPromiseResp ] = await Promise.all([
                detailsPromise,
                castPromise
            ]);

        setState({
            isLoading: false,
            movieFull: moviesDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])
    
    return{
        ...state
    }
}
