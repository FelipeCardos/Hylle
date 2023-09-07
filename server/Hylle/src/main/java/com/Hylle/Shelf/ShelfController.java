package com.Hylle.Shelf;

import com.Hylle.User.User;
import com.Hylle.User.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("shelf")
public class ShelfController {
    @Autowired
    private ShelfRepository shelfRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public ResponseEntity<?> getShelfById(@PathVariable int id){
        Shelf shelf = shelfRepository.findShelfById(id);
        if(shelf == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(shelf);
    }

    @PostMapping("/new")
    public ResponseEntity registerShelf(@RequestBody @Valid ShelfDTO shelf, @RequestParam("userId") int userId){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(userDetails == null)
            return ResponseEntity.notFound().build();
        Shelf newShelf = new Shelf(shelf.title(), shelf.creationTime(), (User) userDetails);
        shelfRepository.save(newShelf);

        return ResponseEntity.ok().build();
    }
}
