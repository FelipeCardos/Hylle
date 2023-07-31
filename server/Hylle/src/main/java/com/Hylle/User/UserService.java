package com.Hylle.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository studentRepository;

    @Autowired
    public UserService(UserRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<User> getUser() {
        return studentRepository.findAll();
    }

    public void insertNewUser(User user){
        System.out.println(user);

    }
}
