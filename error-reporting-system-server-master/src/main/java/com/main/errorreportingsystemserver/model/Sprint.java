package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "sprint")
public class Sprint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sprint_id")
    private Long id;

    @Column(name = "sprint_name", nullable = true)
    private String sprintName;

    @Column(name = "project_id", nullable = true)
    private Long sprintProjectId;

    @Column(name = "summary", nullable = true)
    private String sprintSummery;

    @Column(name = "description", nullable = true)
    private String sprintDescription;

    @Column(name = "creator_id", nullable = true)
    private Long sprintCreatorId;

    @Column(name = "status", nullable = true)
    private String sprintStatus;

    @Column(name = "start_date", nullable = true)
    private String sprintStartDate;

    @Column(name = "end_date", nullable = false)
    private String sprintEndDate;

    @Column(name = "created_date", nullable = true)
    private String sprintCreatedDate;

    @Column(name = "updated_date", nullable = true)
    private String sprintUpdatedDate;

    public Sprint() {
    }

    public Sprint(String sprintName, Long sprintProjectId, String sprintSummery, String sprintDescription, Long sprintCreatorId, String sprintStatus, String sprintStartDate, String sprintEndDate, String sprintCreatedDate, String sprintUpdatedDate) {
        this.sprintName = sprintName;
        this.sprintProjectId = sprintProjectId;
        this.sprintSummery = sprintSummery;
        this.sprintDescription = sprintDescription;
        this.sprintCreatorId = sprintCreatorId;
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
