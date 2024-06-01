import React from 'react';
import './Hero.css';
import Carousel from "react-material-ui-carousel";
import {Paper} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Hero = ({movies}) => {
    let navigate = useNavigate();
    return (
        <div>
            <Carousel>
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div onClick={() => navigate(`/${movie.imdbId}`)} className="movie-card-container">
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