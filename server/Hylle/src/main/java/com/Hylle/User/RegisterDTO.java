package com.Hylle.User;

public record RegisterDTO( String username,
                           String email,
                           String password,
                           Status status,
                           Role role,
                           String firstName,
                           String lastName,
                           String profilePic) {
}
