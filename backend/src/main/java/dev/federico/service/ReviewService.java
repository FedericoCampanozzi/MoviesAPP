package dev.federico.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

//import dev.federico.interfaces.Movie;
import dev.federico.interfaces.Review;
import dev.federico.repository.ReviewRepository;

import java.time.LocalDateTime;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
        Integer reviewId = (int) (repository.count() + 1);
        Review review = repository.insert(new Review(reviewId, reviewBody, LocalDateTime.now(), LocalDateTime.now()));
        /*
        TO FIX THIS !!!
        mongoTemplate.update(Movie.class)
            .matching(Criteria.where("imdbId").is(imdbId))
            .apply(new Update().push("reviews").value(review))
            .first();
        */
        return review;
    }
    public Boolean updateReviewBody(String review_id, String newValue){
        try {
            // Create a query to find the document you want to update
            Query query = new Query(Criteria.where("review_id").is(review_id));
            // Create an update with the new field value
            Update update = new Update().set("body", newValue);
            // Update the first matching document
            mongoTemplate.updateFirst(query, update, Review.class);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public void deleteDocumentById(Integer id) {
        repository.delete(repository.findById(id).get());
    }
}
