package dev.federico.repository;

//import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import dev.federico.interfaces.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, Integer> {
}
