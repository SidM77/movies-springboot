import Hero from "../hero/Hero.tsx";

const Home = ({movies}) => {
    return (
        (movies &&
            <Hero movies={movies}/>
        )
    );
};

export default Home;