package com.main.errorreportingsystemserver.model.dto;

public class FeatureDto {
    private Long id;
    private Long featureEpicId;
    private Long featureProjectId;
    private String featureName;
    private String featureSummary;
    private String featureDescription;
    private Long featureAssigneeId;
    private String featureAssigneeFName;
    private String featureAssigneeLName;
    private String featureStatus;
    private String featureStartDate;
    private String featureEndDate;
    private String featureCreatedDate;
    private String featureUpdatedDate;

    public FeatureDto(Long id, Long featureEpicId, Long featureProjectId, String featureName, String featureSummary, String featureDescription, Long featureAssigneeId, String featureAssigneeFName, String featureAssigneeLName, String featureStatus, String featureStartDate, String featureEndDate, String featureCreatedDate, String featureUpdatedDate) {
        this.id = id;
        this.featureEpicId = featureEpicId;
        this.featureProjectId = featureProjectId;
        this.featureName = featureName;
        this.featureSummary = featureSummary;
        this.featureDescription = featureDescription;
        this.featureAssigneeId = featureAssigneeId;
        this.featureAssigneeFName = featureAssigneeFName;
        this.featureAssigneeLName = featureAssigneeLName;
        this.featureStatus = featureStatus;
        this.featureStartDate = featureStartDate;
        this.featureEndDate = featureEndDate;
        this.featureCreatedDate = featureCreatedDate;
        this.featureUpdatedDate = featureUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFeatureEpicId() {
        return featureEpicId;
    }

    public void setFeatureEpicId(Long featureEpicId) {
        this.featureEpicId = featureEpicId;
    }

    public Long getFeatureProjectId() {
        return featureProjectId;
    }

    public void setFeatureProjectId(Long featureProjectId) {
        this.featureProjectId = featureProjectId;
    }

    public String getFeatureName() {
        return featureName;
    }

    public void setFeatureName(String featureName) {
        this.featureName = featureName;
    }

    public String getFeatureSummary() {
        return featureSummary;
    }

    public void setFeatureSummary(String featureSummary) {
        this.featureSummary = featureSummary;
    }

    public String getFeatureDescription() {
        return featureDescription;
    }

    public void setFeatureDescription(String featureDescription) {
        this.featureDescription = featureDescription;
    }

    public Long getFeatureAssigneeId() {
        return featureAssigneeId;
    }

    public void setFeatureAssigneeId(Long featureAssigneeId) {
        this.featureAssigneeId = featureAssigneeId;
    }

    public String getFeatureAssigneeFName() {
        return featureAssigneeFName;
    }

    public void setFeatureAssigneeFName(String featureAssigneeFName) {
        this.featureAssigneeFName = featureAssigneeFName;
    }

    public String getFeatureAssigneeLName() {
        return featureAssigneeLName;
    }

    public void setFeatureAssigneeLName(String featureAssigneeLName) {
        this.featureAssigneeLName = featureAssigneeLName;
    }

    public String getFeatureStatus() {
        return featureStatus;
    }

    public void setFeatureStatus(String featureStatus) {
        this.featureStatus = featureStatus;
    }

    public String getFeatureStartDate() {
        return featureStartDate;
    }

    public void setFeatureStartDate(String featureStartDate) {
        this.featureStartDate = featureStartDate;
    }

    public String getFeatureEndDate() {
        return featureEndDate;
    }

    public void setFeatureEndDate(String featureEndDate) {
        this.featureEndDate = featureEndDate;
    }

    public String getFeatureCreatedDate() {
        return featureCreatedDate;
    }

    public void setFeatureCreatedDate(String featureCreatedDate) {
        this.featureCreatedDate = featureCreatedDate;
    }

    public String getFeatureUpdatedDate() {
        return featureUpdatedDate;
    }

    public void setFeatureUpdatedDate(String featureUpdatedDate) {
        this.featureUpdatedDate = featureUpdatedDate;
    }
}
