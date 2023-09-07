package com.Hylle.Shelf;

import com.Hylle.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Table(name = "shelf")
@Entity(name = "shelf")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Shelf {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_shelf")
    private int id;
    private String title;
    private Date creationTime;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "User_id")
    private User user;

    public Shelf(String title, Date creationTime, User user) {
        this.title = title;
        this.creationTime = creationTime;
        this.user = user;
    }

    @Override
    public String toString() {
        return "Shelf{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", creationTime=" + creationTime +
                ", user=" + user +
                '}';
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
