package com.main.errorreportingsystemserver.model.dto;

import com.main.errorreportingsystemserver.model.Projects;

import java.util.Set;

public class UserDto {
    private Long id;
    private String userEnmpId;
    private String userFname;
    private String userLName;
    private String userType;
    private String userAddress;
    private String userUsername;
    private String userPassword;
    private String userEMail;
    private String tocken;
    private String userCreatedDate;
    private String userUpdatedDate;
    private Set<Projects> userProjects;

    public UserDto(Long id, String userEnmpId, String userFname, String userLName, String userType, String userAddress, String userUsername, String userPassword, String userEMail, String tocken, String userCreatedDate, String userUpdatedDate, Set<Projects> userProjects) {
        this.id = id;
        this.userEnmpId = userEnmpId;
        this.userFname = userFname;
        this.userLName = userLName;
        this.userType = userType;
        this.userAddress = userAddress;
        this.userUsername = userUsername;
        this.userPassword = userPassword;
        this.userEMail = userEMail;
        this.tocken = tocken;
        this.userCreatedDate = userCreatedDate;
        this.userUpdatedDate = userUpdatedDate;
        this.userProjects = userProjects;
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

    public String getTocken() {
        return tocken;
    }

    public void setTocken(String tocken) {
        this.tocken = tocken;
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

    public Set<Projects> getUserProjects() {
        return userProjects;
    }

    public void setUserProjects(Set<Projects> userProjects) {
        this.userProjects = userProjects;
    }
}
