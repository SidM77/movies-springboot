import {useState} from 'react'
import './App.css'
import axios from "axios";

function App() {
    const [movies, setMovies] = useState();
    const getMovies = async () => {
        const response = await axios.get(`http://localhost:8080/api/v1/movies`);
        setMovies(response.data);
        console.log(response.data)
    }
    return (
        <>
            <button onClick={getMovies}></button>
            {JSON.stringify(movies)}
        </>
    )
}

export default App
