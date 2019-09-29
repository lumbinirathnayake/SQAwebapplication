package com.main.errorreportingsystemserver.model.dto;

public class SprintDto {
    private Long id;
    private String sprintName;
    private Long sprintProjectId;
    private String sprintSummery;
    private String sprintDescription;
    private Long sprintCreatorId;
    private String sprintCreatorFName;
    private String sprintCreatorLName;
    private String sprintStatus;
    private String sprintStartDate;
    private String sprintEndDate;
    private String sprintCreatedDate;
    private String sprintUpdatedDate;

    public SprintDto(Long id, String sprintName, Long sprintProjectId, String sprintSummery, String sprintDescription, Long sprintCreatorId, String sprintCreatorFName, String sprintCreatorLName, String sprintStatus, String sprintStartDate, String sprintEndDate, String sprintCreatedDate, String sprintUpdatedDate) {
        this.id = id;
        this.sprintName = sprintName;
        this.sprintProjectId = sprintProjectId;
        this.sprintSummery = sprintSummery;
        this.sprintDescription = sprintDescription;
        this.sprintCreatorId = sprintCreatorId;
        this.sprintCreatorFName = sprintCreatorFName;
        this.sprintCreatorLName = sprintCreatorLName;
        this.sprintStatus = sprintStatus;
        this.sprintStartDate = sprintStartDate;
        this.sprintEndDate = sprintEndDate;
        this.sprintCreatedDate = sprintCreatedDate;
        this.sprintUpdatedDate = sprintUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSprintName() {
        return sprintName;
    }

    public void setSprintName(String sprintName) {
        this.sprintName = sprintName;
    }

    public Long getSprintProjectId() {
        return sprintProjectId;
    }

    public void setSprintProjectId(Long sprintProjectId) {
        this.sprintProjectId = sprintProjectId;
    }

    public String getSprintSummery() {
        return sprintSummery;
    }

    public void setSprintSummery(String sprintSummery) {
        this.sprintSummery = sprintSummery;
    }

    public String getSprintDescription() {
        return sprintDescription;
    }

    public void setSprintDescription(String sprintDescription) {
        this.sprintDescription = sprintDescription;
    }

    public Long getSprintCreatorId() {
        return sprintCreatorId;
    }

    public void setSprintCreatorId(Long sprintCreatorId) {
        this.sprintCreatorId = sprintCreatorId;
    }

    public String getSprintCreatorFName() {
        return sprintCreatorFName;
    }

    public void setSprintCreatorFName(String sprintCreatorFName) {
        this.sprintCreatorFName = sprintCreatorFName;
    }

    public String getSprintCreatorLName() {
        return sprintCreatorLName;
    }

    public void setSprintCreatorLName(String sprintCreatorLName) {
        this.sprintCreatorLName = sprintCreatorLName;
    }

    public String getSprintStatus() {
        return sprintStatus;
    }

    public void setSprintStatus(String sprintStatus) {
        this.sprintStatus = sprintStatus;
    }

    public String getSprintStartDate() {
        return sprintStartDate;
    }

    public void setSprintStartDate(String sprintStartDate) {
        this.sprintStartDate = sprintStartDate;
    }

    public String getSprintEndDate() {
        return sprintEndDate;
    }

    public void setSprintEndDate(String sprintEndDate) {
        this.sprintEndDate = sprintEndDate;
    }

    public String getSprintCreatedDate() {
        return sprintCreatedDate;
    }

    public void setSprintCreatedDate(String sprintCreatedDate) {
        this.sprintCreatedDate = sprintCreatedDate;
    }

    public String getSprintUpdatedDate() {
        return sprintUpdatedDate;
    }

    public void setSprintUpdatedDate(String sprintUpdatedDate) {
        this.sprintUpdatedDate = sprintUpdatedDate;
    }
}
