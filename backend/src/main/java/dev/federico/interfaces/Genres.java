package dev.federico.interfaces;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Genres {
    @Id
    private ObjectId id;
    private String name;
    public Genres(String name){
        this.name = name;
    }
}
