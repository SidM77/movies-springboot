package dev.sid.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@CrossOrigin(origins = "*")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        System.out.println("Entrypoint1 all movies");
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Optional<Movie>> getMovieByImdbId(@PathVariable String imdbId) {
        System.out.println(imdbId);
        return new ResponseEntity<Optional<Movie>>(movieService.movieByImdbId(imdbId), HttpStatus.OK);
    }
}
