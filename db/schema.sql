DROP DATABASE IF EXISTS flashcards_db;
CREATE DATABASE flashcards_db;
USE flashcards_db;
CREATE TABLE flashcards (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    term VARCHAR(255) NOT NULL,
    definition VARCHAR(255) NOT NULL
);
INSERT INTO flashcards ( term, definition)
VALUES
    ( "dog", "an animal"),
    ( "cat", "a tiger like animal");