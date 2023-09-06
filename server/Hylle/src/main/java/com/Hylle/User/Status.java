package com.Hylle.User;

public enum Status {

    ACTIVE(1),
    INACTIVE(0),
    SUSPENDED(2);

    private int status;
    Status(int status){this.status = status;}

    public int getStatus(){return status;}
}
