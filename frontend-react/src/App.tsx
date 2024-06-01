import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios";
import Layout from "./components/Layout.tsx";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/home/Home.tsx";

function App() {
    const [movies, setMovies] = useState();
    const getMovies = async () => {

        try {
            const response = await axios.get(`http://localhost:8080/api/v1/movies`);
            setMovies(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])
    return (
        <BrowserRouter>
            {/*<Route path={"/"} element={<Layout/>}>*/}
            {/*    */}
            {/*</Route>*/}
            <Routes>
                <Route path={"/"} element={<Home movies={movies}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
