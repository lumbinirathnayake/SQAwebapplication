package com.main.errorreportingsystemserver.model.dto;

public class StoryDto {
    private Long id;
    private String storyName;
    private Long storyProjectId;
    private String storyProjectName;
    private Long storyEpicId;
    private String storyEpicName;
    private Long storyFeatureId;
    private String storyFeatureName;
    private Long storySprintId;
    private String storySprintName;
    private String storySummery;
    private String storyDescription;
    private String storyPoints;
    private String storyStartDate;
    private String storyEndDate;
    private Long storyAssigneeId;
    private String storyAssigneeFName;
    private String storyAssigneeLName;
    private Long storyReporterId;
    private String storyReporterFName;
    private String storyReporterLName;
    private String storyStatus;
    private String storyCreatedDate;
    private String storyUpdatedDate;

    public StoryDto(Long id, String storyName, Long storyProjectId, String storyProjectName, Long storyEpicId, String storyEpicName, Long storyFeatureId, String storyFeatureName, Long storySprintId, String storySprintName, String storySummery, String storyDescription, String storyPoints, String storyStartDate, String storyEndDate, Long storyAssigneeId, String storyAssigneeFName, String storyAssigneeLName, Long storyReporterId, String storyReporterFName, String storyReporterLName, String storyStatus, String storyCreatedDate, String storyUpdatedDate) {
        this.id = id;
        this.storyName = storyName;
        this.storyProjectId = storyProjectId;
        this.storyProjectName = storyProjectName;
        this.storyEpicId = storyEpicId;
        this.storyEpicName = storyEpicName;
        this.storyFeatureId = storyFeatureId;
        this.storyFeatureName = storyFeatureName;
        this.storySprintId = storySprintId;
        this.storySprintName = storySprintName;
        this.storySummery = storySummery;
        this.storyDescription = storyDescription;
        this.storyPoints = storyPoints;
        this.storyStartDate = storyStartDate;
        this.storyEndDate = storyEndDate;
        this.storyAssigneeId = storyAssigneeId;
        this.storyAssigneeFName = storyAssigneeFName;
        this.storyAssigneeLName = storyAssigneeLName;
        this.storyReporterId = storyReporterId;
        this.storyReporterFName = storyReporterFName;
        this.storyReporterLName = storyReporterLName;
        this.storyStatus = storyStatus;
        this.storyCreatedDate = storyCreatedDate;
        this.storyUpdatedDate = storyUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStoryName() {
        return storyName;
    }

    public void setStoryName(String storyName) {
        this.storyName = storyName;
    }

    public Long getStoryProjectId() {
        return storyProjectId;
    }

    public void setStoryProjectId(Long storyProjectId) {
        this.storyProjectId = storyProjectId;
    }

    public String getStoryProjectName() {
        return storyProjectName;
    }

    public void setStoryProjectName(String storyProjectName) {
        this.storyProjectName = storyProjectName;
    }

    public Long getStoryEpicId() {
        return storyEpicId;
    }

    public void setStoryEpicId(Long storyEpicId) {
        this.storyEpicId = storyEpicId;
    }

    public String getStoryEpicName() {
        return storyEpicName;
    }

    public void setStoryEpicName(String storyEpicName) {
        this.storyEpicName = storyEpicName;
    }

    public Long getStoryFeatureId() {
        return storyFeatureId;
    }

    public void setStoryFeatureId(Long storyFeatureId) {
        this.storyFeatureId = storyFeatureId;
    }

    public String getStoryFeatureName() {
        return storyFeatureName;
    }

    public void setStoryFeatureName(String storyFeatureName) {
        this.storyFeatureName = storyFeatureName;
    }

    public Long getStorySprintId() {
        return storySprintId;
    }

    public void setStorySprintId(Long storySprintId) {
        this.storySprintId = storySprintId;
    }

    public String getStorySprintName() {
        return storySprintName;
    }

    public void setStorySprintName(String storySprintName) {
        this.storySprintName = storySprintName;
    }

    public String getStorySummery() {
        return storySummery;
    }

    public void setStorySummery(String storySummery) {
        this.storySummery = storySummery;
    }

    public String getStoryDescription() {
        return storyDescription;
    }

    public void setStoryDescription(String storyDescription) {
        this.storyDescription = storyDescription;
    }

    public String getStoryPoints() {
        return storyPoints;
    }

    public void setStoryPoints(String storyPoints) {
        this.storyPoints = storyPoints;
    }

    public String getStoryStartDate() {
        return storyStartDate;
    }

    public void setStoryStartDate(String storyStartDate) {
        this.storyStartDate = storyStartDate;
    }

    public String getStoryEndDate() {
        return storyEndDate;
    }

    public void setStoryEndDate(String storyEndDate) {
        this.storyEndDate = storyEndDate;
    }

    public Long getStoryAssigneeId() {
        return storyAssigneeId;
    }

    public void setStoryAssigneeId(Long storyAssigneeId) {
        this.storyAssigneeId = storyAssigneeId;
    }

    public String getStoryAssigneeFName() {
        return storyAssigneeFName;
    }

    public void setStoryAssigneeFName(String storyAssigneeFName) {
        this.storyAssigneeFName = storyAssigneeFName;
    }

    public String getStoryAssigneeLName() {
        return storyAssigneeLName;
    }

    public void setStoryAssigneeLName(String storyAssigneeLName) {
        this.storyAssigneeLName = storyAssigneeLName;
    }

    public Long getStoryReporterId() {
        return storyReporterId;
    }

    public void setStoryReporterId(Long storyReporterId) {
        this.storyReporterId = storyReporterId;
    }

    public String getStoryReporterFName() {
        return storyReporterFName;
    }

    public void setStoryReporterFName(String storyReporterFName) {
        this.storyReporterFName = storyReporterFName;
    }

    public String getStoryReporterLName() {
        return storyReporterLName;
    }

    public void setStoryReporterLName(String storyReporterLName) {
        this.storyReporterLName = storyReporterLName;
    }

    public String getStoryStatus() {
        return storyStatus;
    }

    public void setStoryStatus(String storyStatus) {
        this.storyStatus = storyStatus;
    }

    public String getStoryCreatedDate() {
        return storyCreatedDate;
    }

    public void setStoryCreatedDate(String storyCreatedDate) {
        this.storyCreatedDate = storyCreatedDate;
    }

    public String getStoryUpdatedDate() {
        return storyUpdatedDate;
    }

    public void setStoryUpdatedDate(String storyUpdatedDate) {
        this.storyUpdatedDate = storyUpdatedDate;
    }
}
