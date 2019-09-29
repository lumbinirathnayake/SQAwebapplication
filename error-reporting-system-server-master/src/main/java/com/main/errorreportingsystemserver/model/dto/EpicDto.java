package com.main.errorreportingsystemserver.model.dto;

public class EpicDto {
    private Long id;
    private Long proId;
    private String epicName;
    private String epicDescription;
    private String epicSummery;
    private Long epicAssigneeId;
    private String epicAssigneeFName;
    private String epicAssigneeLName;
    private String epicStatus;
    private String epicStartDate;
    private String epicEndDate;
    private String epicCreatedDate;
    private String epicUpdatedDate;

    public EpicDto(Long id, Long proId, String epicName, String epicDescription, String epicSummery, Long epicAssigneeId, String epicAssigneeFName, String epicAssigneeLName, String epicStatus, String epicStartDate, String epicEndDate, String epicCreatedDate, String epicUpdatedDate) {
        this.id = id;
        this.proId = proId;
        this.epicName = epicName;
        this.epicDescription = epicDescription;
        this.epicSummery = epicSummery;
        this.epicAssigneeId = epicAssigneeId;
        this.epicAssigneeFName = epicAssigneeFName;
        this.epicAssigneeLName = epicAssigneeLName;
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

    public String getEpicAssigneeFName() {
        return epicAssigneeFName;
    }

    public void setEpicAssigneeFName(String epicAssigneeFName) {
        this.epicAssigneeFName = epicAssigneeFName;
    }

    public String getEpicAssigneeLName() {
        return epicAssigneeLName;
    }

    public void setEpicAssigneeLName(String epicAssigneeLName) {
        this.epicAssigneeLName = epicAssigneeLName;
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
