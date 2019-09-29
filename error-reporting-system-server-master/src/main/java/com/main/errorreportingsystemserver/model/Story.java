package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "story")
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_id")
    private Long id;

    @Column(name = "story_name", nullable = true)
    private String storyName;

    @Column(name = "project_id", nullable = true)
    private Long storyProjectId;

    @Column(name = "epic_id", nullable = true)
    private Long storyEpicId;

    @Column(name = "feature_id", nullable = true)
    private Long storyFeatureId;

    @Column(name = "sprint_id", nullable = true)
    private Long storySprintId;

    @Column(name = "summary", nullable = true)
    private String storySummery;

    @Column(name = "description", nullable = true)
    private String storyDescription;

    @Column(name = "story_points", nullable = true)
    private String storyPoints;

    @Column(name = "start_date", nullable = true)
    private String storyStartDate;

    @Column(name = "end_date", nullable = false)
    private String storyEndDate;

    @Column(name = "assignee_id", nullable = true)
    private Long storyAssigneeId;

    @Column(name = "reporter_id", nullable = true)
    private Long storyReporterId;

    @Column(name = "status", nullable = true)
    private String storyStatus;

    @Column(name = "created_date", nullable = true)
    private String storyCreatedDate;

    @Column(name = "updated_date", nullable = true)
    private String storyUpdatedDate;

    public Story() {
    }

    public Story(String storyName, Long storyProjectId, Long storyEpicId, Long storyFeatureId, Long storySprintId, String storySummery, String storyDescription, String storyPoints, String storyStartDate, String storyEndDate, Long storyAssigneeId, Long storyReporterId, String storyStatus, String storyCreatedDate, String storyUpdatedDate) {
        this.storyName = storyName;
        this.storyProjectId = storyProjectId;
        this.storyEpicId = storyEpicId;
        this.storyFeatureId = storyFeatureId;
        this.storySprintId = storySprintId;
        this.storySummery = storySummery;
        this.storyDescription = storyDescription;
        this.storyPoints = storyPoints;
        this.storyStartDate = storyStartDate;
        this.storyEndDate = storyEndDate;
        this.storyAssigneeId = storyAssigneeId;
        this.storyReporterId = storyReporterId;
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

    public Long getStoryEpicId() {
        return storyEpicId;
    }

    public void setStoryEpicId(Long storyEpicId) {
        this.storyEpicId = storyEpicId;
    }

    public Long getStoryFeatureId() {
        return storyFeatureId;
    }

    public void setStoryFeatureId(Long storyFeatureId) {
        this.storyFeatureId = storyFeatureId;
    }

    public Long getStorySprintId() {
        return storySprintId;
    }

    public void setStorySprintId(Long storySprintId) {
        this.storySprintId = storySprintId;
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

    public Long getStoryReporterId() {
        return storyReporterId;
    }

    public void setStoryReporterId(Long storyReporterId) {
        this.storyReporterId = storyReporterId;
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
