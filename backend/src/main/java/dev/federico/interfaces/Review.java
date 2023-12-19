package dev.federico.interfaces;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.data.annotation.Id;
//import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "reviews")
@Data
@Getter
@Setter
@NoArgsConstructor
public class Review {
    @Id
    private Integer reviewId;
    private String body;
    private LocalDateTime created;
    private LocalDateTime updated;

    public Review(Integer reviewId, String body, LocalDateTime created, LocalDateTime updated) {
        this.reviewId = reviewId;
        this.body = body;
        this.created = created;
        this.updated = updated;
    }
}
