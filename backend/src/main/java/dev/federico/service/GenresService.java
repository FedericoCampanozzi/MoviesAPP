package dev.federico.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

@Service
public class GenresService {
    @Autowired
    private MongoTemplate mongoTemplate;

    public String getUniqueGenres() {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.unwind("genres"),
                Aggregation.project("genres"),
                Aggregation.group().addToSet("genres").as("uniqueValues"),
                Aggregation.project().and("uniqueValues").as("gname")
        );
        AggregationResults<String> result = mongoTemplate.aggregate(aggregation, "movies", String.class);
        return result.getMappedResults().get(0);
    }

}
