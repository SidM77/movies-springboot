import React from 'react';
import './Hero.css';
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Hero = ({movies, setCurrentMovie, currentMovie}) => {
    let navigate = useNavigate();

    const handleClick = (id) => {
        console.log("Button press ", id)
        setCurrentMovie(id);
        navigate(`/reviews/${id}`)
        // navigate(`/${movie.imdbId}`)
    }
    return (
        <div>
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper onClick={() => handleClick(movie.imdbId)}>
                                <div className="movie-card-container">
                                    <div className="movie-card">
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt=""/>
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Hero;