package com.Hylle.User;

public record RegisterDTO( String username, String email, String password, String status, Role role, String firstName, String lastName ) {
}
