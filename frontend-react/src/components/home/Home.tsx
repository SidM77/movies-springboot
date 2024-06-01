import Hero from "../hero/Hero.tsx";

const Home = ({movies, setCurrentMovie}) => {
    return (
        (movies &&
            <Hero movies={movies} setCurrentMovie={setCurrentMovie}/>
        )
    );
};

export default Home;