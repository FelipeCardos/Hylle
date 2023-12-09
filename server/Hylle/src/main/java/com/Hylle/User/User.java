package com.Hylle.User;

import com.Hylle.Shelf.Shelf;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Table(name = "user")
@Entity(name = "user")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id", exclude = "shelves")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_user")
    private int id;
    @Column(name = "username")
    private String username;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "status")
    private Status status;
    @Column(name = "role")
    private Role role;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @OneToMany(mappedBy = "user")
    private List<Shelf> shelves = new ArrayList<>();
    @Column(name = "profilePic")
    private String profilePic;

    public User(String username, String email, String password, Status status, Role role, String firstName, String lastName, String profilePic) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.status = status;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePic = profilePic;
    }

    public User(String username, String email , String password , Status status , Role role , String firstName, String lastName, String profilePic, List<Shelf> shelves ){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        if(role == null)
            this.role = Role.USER;
        else
            this.role = role;
        this.email = email;
        this.profilePic = profilePic;
        this.shelves = shelves;
    }
    @Override
    public String getUsername(){
        return this.username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.role == Role.ADMIN) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));

    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
