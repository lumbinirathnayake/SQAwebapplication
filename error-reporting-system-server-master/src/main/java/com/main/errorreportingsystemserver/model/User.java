package com.main.errorreportingsystemserver.model;


import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(name = "user_enmpId", nullable = false)
    private String userEnmpId;
    
    @Column(name = "user_fname", nullable = true)
    private String userFname;
    
    @Column(name = "user_lname", nullable = true)
    private String userLName;
    
    @Column(name = "user_type", nullable = true)
    private String userType;
    
    @Column(name = "user_address", nullable = true)
    private String userAddress;

    @Column(name = "user_username", nullable = true)
    private String userUsername;
    
    @Column(name = "user_password", nullable = true)
    private String userPassword;

    @Column(name = "user_email", nullable = true)
    private String userEMail;
    
    @Column(name = "user_created_date", nullable = false, updatable = false)
    private String userCreatedDate;

    @Column(name = "user_updated_date", nullable = true)
    private String userUpdatedDate;

    public User() {
    }

    public User(String userEnmpId, String userFname, String userLName, String userType, String userAddress, String userUsername, String userPassword, String userEMail, String userCreatedDate, String userUpdatedDate) {
        this.userEnmpId = userEnmpId;
        this.userFname = userFname;
        this.userLName = userLName;
        this.userType = userType;
        this.userAddress = userAddress;
        this.userUsername = userUsername;
        this.userPassword = userPassword;
        this.userEMail = userEMail;
        this.userCreatedDate = userCreatedDate;
        this.userUpdatedDate = userUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserEnmpId() {
        return userEnmpId;
    }

    public void setUserEnmpId(String userEnmpId) {
        this.userEnmpId = userEnmpId;
    }

    public String getUserFname() {
        return userFname;
    }

    public void setUserFname(String userFname) {
        this.userFname = userFname;
    }

    public String getUserLName() {
        return userLName;
    }

    public void setUserLName(String userLName) {
        this.userLName = userLName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserUsername() {
        return userUsername;
    }

    public void setUserUsername(String userUsername) {
        this.userUsername = userUsername;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserEMail() {
        return userEMail;
    }

    public void setUserEMail(String userEMail) {
        this.userEMail = userEMail;
    }

    public String getUserCreatedDate() {
        return userCreatedDate;
    }

    public void setUserCreatedDate(String userCreatedDate) {
        this.userCreatedDate = userCreatedDate;
    }

    public String getUserUpdatedDate() {
        return userUpdatedDate;
    }

    public void setUserUpdatedDate(String userUpdatedDate) {
        this.userUpdatedDate = userUpdatedDate;
    }
}