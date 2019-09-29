package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "epic")
public class Epic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "epic_id")
    private Long id;

    @Column(name = "project_id", nullable = false)
    private Long proId;

    @Column(name = "epic_name", nullable = true)
    private String epicName;

    @Column(name = "epic_description", nullable = true)
    private String epicDescription;

    @Column(name = "epic_summery", nullable = true)
    private String epicSummery;

    @Column(name = "assignee_id", nullable = true)
    private Long epicAssigneeId;

    @Column(name = "status", nullable = true)
    private String epicStatus;

    @Column(name = "start_date", nullable = true)
    private String epicStartDate;

    @Column(name = "end_date", nullable = false)
    private String epicEndDate;

    @Column(name = "created_date", nullable = true)
    private String epicCreatedDate;

    @Column(name = "updated_date", nullable = true)
    private String epicUpdatedDate;

    public Epic() {
    }

    public Epic(Long proId, String epicName, String epicDescription, String epicSummery, Long epicAssigneeId, String epicStatus, String epicStartDate, String epicEndDate, String epicCreatedDate, String epicUpdatedDate) {
        this.proId = proId;
        this.epicName = epicName;
        this.epicDescription = epicDescription;
        this.epicSummery = epicSummery;
        this.epicAssigneeId = epicAssigneeId;
        this.epicStatus = epicStatus;
        this.epicStartDate = epicStartDate;
        this.epicEndDate = epicEndDate;
        this.epicCreatedDate = epicCreatedDate;
        this.epicUpdatedDate = epicUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getProId() {
        return proId;
    }

    public void setProId(Long proId) {
        this.proId = proId;
    }

    public String getEpicName() {
        return epicName;
    }

    public void setEpicName(String epicName) {
        this.epicName = epicName;
    }

    public String getEpicDescription() {
        return epicDescription;
    }

    public void setEpicDescription(String epicDescription) {
        this.epicDescription = epicDescription;
    }

    public String getEpicSummery() {
        return epicSummery;
    }

    public void setEpicSummery(String epicSummery) {
        this.epicSummery = epicSummery;
    }

    public Long getEpicAssigneeId() {
        return epicAssigneeId;
    }

    public void setEpicAssigneeId(Long epicAssigneeId) {
        this.epicAssigneeId = epicAssigneeId;
    }

    public String getEpicStatus() {
        return epicStatus;
    }

    public void setEpicStatus(String epicStatus) {
        this.epicStatus = epicStatus;
    }

    public String getEpicStartDate() {
        return epicStartDate;
    }

    public void setEpicStartDate(String epicStartDate) {
        this.epicStartDate = epicStartDate;
    }

    public String getEpicEndDate() {
        return epicEndDate;
    }

    public void setEpicEndDate(String epicEndDate) {
        this.epicEndDate = epicEndDate;
    }

    public String getEpicCreatedDate() {
        return epicCreatedDate;
    }

    public void setEpicCreatedDate(String epicCreatedDate) {
        this.epicCreatedDate = epicCreatedDate;
    }

    public String getEpicUpdatedDate() {
        return epicUpdatedDate;
    }

    public void setEpicUpdatedDate(String epicUpdatedDate) {
        this.epicUpdatedDate = epicUpdatedDate;
    }
}
