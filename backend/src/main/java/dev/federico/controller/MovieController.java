package dev.federico.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import dev.federico.interfaces.Movie;
import dev.federico.service.MovieService;

import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService service;

    @GetMapping
    public ResponseEntity<List<Movie>> getMovies() {
        return new ResponseEntity<List<Movie>>(service.findAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Movie>>(service.findMovieByImdbId(imdbId), HttpStatus.OK);
    }
    
    @PostMapping("/set-movie-like")
    public ResponseEntity<String> setMovieLike(@RequestBody Map<String, String> payload){
        String imdbId = payload.get("imdbId");
        Boolean oldValue = service.findMovieByImdbId(imdbId).get().getLiked();
        service.updateMovieLike(imdbId, oldValue);
        return new ResponseEntity<String>("OK", HttpStatus.OK);
    }
}
