package com.Hylle.User;

import com.Hylle.Shelf.Shelf;
import com.Hylle.Shelf.ShelfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private ShelfRepository shelfRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{user_id}/shelves")
    public ResponseEntity<?> getShelvesByUserId(@PathVariable int user_id){
        List<Shelf> shelves = shelfRepository.findShelvesByUserId(user_id);
        if(shelves == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(shelves);
    }
}
