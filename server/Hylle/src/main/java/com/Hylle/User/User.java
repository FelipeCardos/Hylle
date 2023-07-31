package com.Hylle.User;

import jakarta.persistence.*;
import org.springframework.stereotype.Service;

@Entity
@Table
public class User {
    @Id
    @SequenceGenerator(
            name="user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private int id;
    private String Email;
    private String Username;
    private String Password;

    private String Status;


    public User() {
    }

    public User(int id, String email, String username, String password, String status) {
        this.id = id;
        this.Email = email;
        Username = username;
        Password = password;
        Status = status;
    }

    public User(String email, String username, String password, String status) {
        this.Email = email;
        Username = username;
        Password = password;
        Status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + Email + '\'' +
                ", Username='" + Username + '\'' +
                ", Password='" + Password + '\'' +
                ", Status='" + Status + '\'' +
                '}';
    }
}
