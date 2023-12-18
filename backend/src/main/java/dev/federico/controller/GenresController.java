package dev.federico.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.federico.service.GenresService;

@RestController
@RequestMapping("/api/v1/genres")
public class GenresController {
    private GenresService service;
    /* get all genres*/
    @GetMapping("/get-all")
    public ResponseEntity<List<String>> getGenres() {
        List<String> l = new ArrayList<String>();
        l.add("G1");
        l.add("G2");
        l.add("G3");
        l.add("G4");
        return new ResponseEntity<List<String>>(l, HttpStatus.OK);
    }

}
