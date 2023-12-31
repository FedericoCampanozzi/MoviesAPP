package dev.federico.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import dev.federico.interfaces.Review;
import dev.federico.service.ReviewService;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    @Autowired
    private ReviewService service;

    @PostMapping()
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(service.createReview(payload.get("reviewBody"), payload.get("imdbId")), HttpStatus.OK);
    }

    @PostMapping("/update-body")
    public ResponseEntity<Boolean> updateReviewBody(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Boolean>(service.updateReviewBody(Integer.parseInt(payload.get("reviewId")), payload.get("reviewBody")), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{reviewId}")
    public ResponseEntity<String> deleteDocument(@PathVariable Integer reviewId) {
        service.deleteDocumentById(reviewId);
        return ResponseEntity.ok("Document deleted successfully");
    }
}
