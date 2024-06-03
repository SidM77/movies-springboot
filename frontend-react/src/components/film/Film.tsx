import React, {useEffect, useState} from 'react';
import axios from "axios";

const Film = ({currentMovie}) => {
    const [movie, setMovie] = useState(0)
    const getMovie = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/movies/${currentMovie}`)
            setMovie(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        console.log(currentMovie)
        getMovie();
    }, []);
    return (
        <div>
            <h1>{movie.title}</h1>
            {/*<div>*/}
            {movie.reviewIds.map((m) => {
                return (
                    <h2>{m.body}</h2>
                )
            })}
            {/*</div>*/}
        </div>
    );
};

export default Film;