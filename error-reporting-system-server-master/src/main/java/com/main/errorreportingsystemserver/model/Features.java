package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "feature")
public class Features {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feature_id")
    private Long id;

    @Column(name = "epic_id", nullable = false)
    private Long featureEpicId;

    @Column(name = "project_id", nullable = true)
    private Long featureProjectId;

    @Column(name = "name", nullable = true)
    private String featureName;

    @Column(name = "summary", nullable = true)
    private String featureSummary;

    @Column(name = "description", nullable = true)
    private String featureDescription;

    @Column(name = "assignee_id", nullable = true)
    private Long featureAssigneeId;

    @Column(name = "status", nullable = true)
    private String featureStatus;

    @Column(name = "start_date", nullable = true)
    private String featureStartDate;

    @Column(name = "end_date", nullable = false)
    private String featureEndDate;

    @Column(name = "created_date", nullable = true)
    private String featureCreatedDate;

    @Column(name = "updated_date", nullable = true)
    private String featureUpdatedDate;

    public Features() {
    }

    public Features(Long featureEpicId, Long featureProjectId, String featureName, String featureSummary, String featureDescription, Long featureAssigneeId, String featureStatus, String featureStartDate, String featureEndDate, String featureCreatedDate, String featureUpdatedDate) {
        this.featureEpicId = featureEpicId;
        this.featureProjectId = featureProjectId;
        this.featureName = featureName;
        this.featureSummary = featureSummary;
        this.featureDescription = featureDescription;
        this.featureAssigneeId = featureAssigneeId;
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
