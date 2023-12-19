package dev.federico.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import dev.federico.interfaces.Movie;
import dev.federico.repository.MovieRepository;
import org.springframework.data.mongodb.core.query.Query;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }
    public Optional<Movie> findMovieByImdbId(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }
    public void updateMovieLike(String imdbId, Boolean oldValue){
        // Create a query to find the document you want to update
        Query query = new Query(Criteria.where("imdbId").is(imdbId));
        // Create an update with the new field value
        Update update = new Update().set("liked", !oldValue);
        // Update the first matching document
        mongoTemplate.updateFirst(query, update, Movie.class);
    }
}
