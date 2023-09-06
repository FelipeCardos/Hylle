package com.Hylle.Shelf;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShelfRepository extends JpaRepository<Shelf, Integer> {
    Shelf findShelfById(int id);

    List<Shelf> findShelvesByUserId(int userId);
}