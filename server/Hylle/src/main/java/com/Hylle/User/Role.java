package com.Hylle.User;

public enum Role {
    USER("user"),
    ADMIN("amin");

    private String role;

    Role(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
