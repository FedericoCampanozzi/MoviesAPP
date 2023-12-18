package dev.federico.service;

import java.util.ArrayList;
import java.util.List;
/*
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;
import org.springframework.data.mongodb.core.aggregation.UnwindOperation;
*/
//import dev.federico.interfaces.Genres;
//import dev.federico.repository.GenresRepository;

public class GenresService {
    //@Autowired
    //private GenresRepository repository;
    //@Autowired
    //private MongoTemplate mongoTemplate;

    public List<String> getUniqueGenres() {
        /*
        UnwindOperation unwindGenres = Aggregation.unwind("genres");

        ProjectOperation projectGenres = Aggregation.project("genres");

        GroupOperation groupByIdAndAddToSet = Aggregation.group().addToSet("genres").as("uniqueValues");

        ProjectOperation projectToRename = Aggregation.project().andExclude("_id").and("uniqueValues").as("genres");

        Aggregation aggregation = Aggregation.newAggregation(
                unwindGenres,
                projectGenres,
                groupByIdAndAddToSet,
                projectToRename);

        AggregationResults<Genres> result = mongoTemplate.aggregate(aggregation, "movies", Genres.class);

        return result.getUniqueMappedResult();
        */
        List<String> l = new ArrayList<String>();
        l.add("G1");
        l.add("G2");
        l.add("G3");
        l.add("G4");
        return l;
    }

}
