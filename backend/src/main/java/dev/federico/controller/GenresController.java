package dev.federico.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import dev.federico.service.GenresService;

@RestController
@RequestMapping("/api/v1/genres")
public class GenresController {
    @Autowired
    private GenresService service;
    @GetMapping("/get-all")
    public ResponseEntity<String> getGenres() {
        return new ResponseEntity<String>(service.getUniqueGenres(), HttpStatus.OK);
    }
}
