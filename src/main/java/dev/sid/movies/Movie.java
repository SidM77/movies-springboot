package dev.sid.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    private ObjectId id;
    private List<String> backdrops;
    private List<String> genres;
    private String imdbId;
    private String poster;
    private String releaseDate;
    @DocumentReference
    private List<Review> reviewIds;
    private String title;
    private String trailerLink;

}
