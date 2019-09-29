package com.main.errorreportingsystemserver.model.dto;

import com.main.errorreportingsystemserver.model.User;

import java.util.Set;

public class ProjectDto {
    private Long id;
    private String proName;
    private String proType;
    private String proDescription;
    private Long proCreatorId;
    private String proCreatorFName;
    private String proCreatorLName;
    private Long proLeadId;
    private String proLeadFName;
    private String proLeadLName;
    private String proStartedDate;
    private String proEndDate;
    private String proCreatedDate;
    private String proUpdatedDate;
    private Set<User> proUsers;

    public ProjectDto(String proName, String proType, String proDescription, Long proCreatorId, String proCreatorFName, String proCreatorLName, Long proLeadId, String proLeadFName, String proLeadLName, String proStartedDate, String proEndDate, String proCreatedDate, String proUpdatedDate, Set<User> proUsers) {
        this.proName = proName;
        this.proType = proType;
        this.proDescription = proDescription;
        this.proCreatorId = proCreatorId;
        this.proCreatorFName = proCreatorFName;
        this.proCreatorLName = proCreatorLName;
        this.proLeadId = proLeadId;
        this.proLeadFName = proLeadFName;
        this.proLeadLName = proLeadLName;
        this.proStartedDate = proStartedDate;
        this.proEndDate = proEndDate;
        this.proCreatedDate = proCreatedDate;
        this.proUpdatedDate = proUpdatedDate;
        this.proUsers = proUsers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public String getProType() {
        return proType;
    }

    public void setProType(String proType) {
        this.proType = proType;
    }

    public String getProDescription() {
        return proDescription;
    }

    public void setProDescription(String proDescription) {
        this.proDescription = proDescription;
    }

    public Long getProCreatorId() {
        return proCreatorId;
    }

    public void setProCreatorId(Long proCreatorId) {
        this.proCreatorId = proCreatorId;
    }

    public String getProCreatorFName() {
        return proCreatorFName;
    }

    public void setProCreatorFName(String proCreatorFName) {
        this.proCreatorFName = proCreatorFName;
    }

    public String getProCreatorLName() {
        return proCreatorLName;
    }

    public void setProCreatorLName(String proCreatorLName) {
        this.proCreatorLName = proCreatorLName;
    }

    public Long getProLeadId() {
        return proLeadId;
    }

    public void setProLeadId(Long proLeadId) {
        this.proLeadId = proLeadId;
    }

    public String getProLeadFName() {
        return proLeadFName;
    }

    public void setProLeadFName(String proLeadFName) {
        this.proLeadFName = proLeadFName;
    }

    public String getProLeadLName() {
        return proLeadLName;
    }

    public void setProLeadLName(String proLeadLName) {
        this.proLeadLName = proLeadLName;
    }

    public String getProStartedDate() {
        return proStartedDate;
    }

    public void setProStartedDate(String proStartedDate) {
        this.proStartedDate = proStartedDate;
    }

    public String getProEndDate() {
        return proEndDate;
    }

    public void setProEndDate(String proEndDate) {
        this.proEndDate = proEndDate;
    }

    public String getProCreatedDate() {
        return proCreatedDate;
    }

    public void setProCreatedDate(String proCreatedDate) {
        this.proCreatedDate = proCreatedDate;
    }

    public String getProUpdatedDate() {
        return proUpdatedDate;
    }

    public void setProUpdatedDate(String proUpdatedDate) {
        this.proUpdatedDate = proUpdatedDate;
    }

    public Set<User> getProUsers() {
        return proUsers;
    }

    public void setProUsers(Set<User> proUsers) {
        this.proUsers = proUsers;
    }
}
