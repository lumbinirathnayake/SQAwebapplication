package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long id;

    @Column(name = "task_name", nullable = true)
    private String taskName;

    @Column(name = "project_id", nullable = true)
    private Long taskProjectId;

    @Column(name = "story_id", nullable = true)
    private Long taskStoryId;

    @Column(name = "feature_id", nullable = true)
    private Long taskFeatureId;

    @Column(name = "sprint_id", nullable = true)
    private Long taskSprintId;

    @Column(name = "summary", nullable = true)
    private String taskSummery;

    @Column(name = "description", nullable = true)
    private String taskDescription;

    @Column(name = "start_date", nullable = true)
    private String taskStartDate;

    @Column(name = "end_date", nullable = false)
    private String taskEndDate;

    @Column(name = "assignee_id", nullable = true)
    private Long taskAssigneeId;

    @Column(name = "creator_id", nullable = true)
    private Long taskCreatorId;

    @Column(name = "status", nullable = true)
    private String taskStatus;

    @Column(name = "estimated_time", nullable = true)
    private String taskEstimatedTime;

    @Column(name = "logged_time", nullable = true)
    private String taskLoggedTime;

    @Column(name = "remaining_time", nullable = true)
    private String taskRemainingTime;

    @Column(name = "created_date", nullable = true)
    private String taskCreatedDate;

    @Column(name = "updated_date", nullable = true)
    private String taskUpdatedDate;

    public Task() {
    }

    public Task(String taskName, Long taskProjectId, Long taskStoryId, Long taskFeatureId, Long taskSprintId, String taskSummery, String taskDescription, String taskStartDate, String taskEndDate, Long taskAssigneeId, Long taskCreatorId, String taskStatus, String taskEstimatedTime, String taskLoggedTime, String taskRemainingTime, String taskCreatedDate, String taskUpdatedDate) {
        this.taskName = taskName;
        this.taskProjectId = taskProjectId;
        this.taskStoryId = taskStoryId;
        this.taskFeatureId = taskFeatureId;
        this.taskSprintId = taskSprintId;
        this.taskSummery = taskSummery;
        this.taskDescription = taskDescription;
        this.taskStartDate = taskStartDate;
        this.taskEndDate = taskEndDate;
        this.taskAssigneeId = taskAssigneeId;
        this.taskCreatorId = taskCreatorId;
        this.taskStatus = taskStatus;
        this.taskEstimatedTime = taskEstimatedTime;
        this.taskLoggedTime = taskLoggedTime;
        this.taskRemainingTime = taskRemainingTime;
        this.taskCreatedDate = taskCreatedDate;
        this.taskUpdatedDate = taskUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Long getTaskProjectId() {
        return taskProjectId;
    }

    public void setTaskProjectId(Long taskProjectId) {
        this.taskProjectId = taskProjectId;
    }

    public Long getTaskStoryId() {
        return taskStoryId;
    }

    public void setTaskStoryId(Long taskStoryId) {
        this.taskStoryId = taskStoryId;
    }

    public Long getTaskFeatureId() {
        return taskFeatureId;
    }

    public void setTaskFeatureId(Long taskFeatureId) {
        this.taskFeatureId = taskFeatureId;
    }

    public Long getTaskSprintId() {
        return taskSprintId;
    }

    public void setTaskSprintId(Long taskSprintId) {
        this.taskSprintId = taskSprintId;
    }

    public String getTaskSummery() {
        return taskSummery;
    }

    public void setTaskSummery(String taskSummery) {
        this.taskSummery = taskSummery;
    }

    public String getTaskDescription() {
        return taskDescription;
    }

    public void setTaskDescription(String taskDescription) {
        this.taskDescription = taskDescription;
    }

    public String getTaskStartDate() {
        return taskStartDate;
    }

    public void setTaskStartDate(String taskStartDate) {
        this.taskStartDate = taskStartDate;
    }

    public String getTaskEndDate() {
        return taskEndDate;
    }

    public void setTaskEndDate(String taskEndDate) {
        this.taskEndDate = taskEndDate;
    }

    public Long getTaskAssigneeId() {
        return taskAssigneeId;
    }

    public void setTaskAssigneeId(Long taskAssigneeId) {
        this.taskAssigneeId = taskAssigneeId;
    }

    public Long getTaskCreatorId() {
        return taskCreatorId;
    }

    public void setTaskCreatorId(Long taskCreatorId) {
        this.taskCreatorId = taskCreatorId;
    }

    public String getTaskStatus() {
        return taskStatus;
    }

    public void setTaskStatus(String taskStatus) {
        this.taskStatus = taskStatus;
    }

    public String getTaskEstimatedTime() {
        return taskEstimatedTime;
    }

    public void setTaskEstimatedTime(String taskEstimatedTime) {
        this.taskEstimatedTime = taskEstimatedTime;
    }

    public String getTaskLoggedTime() {
        return taskLoggedTime;
    }

    public void setTaskLoggedTime(String taskLoggedTime) {
        this.taskLoggedTime = taskLoggedTime;
    }

    public String getTaskRemainingTime() {
        return taskRemainingTime;
    }

    public void setTaskRemainingTime(String taskRemainingTime) {
        this.taskRemainingTime = taskRemainingTime;
    }

    public String getTaskCreatedDate() {
        return taskCreatedDate;
    }

    public void setTaskCreatedDate(String taskCreatedDate) {
        this.taskCreatedDate = taskCreatedDate;
    }

    public String getTaskUpdatedDate() {
        return taskUpdatedDate;
    }

    public void setTaskUpdatedDate(String taskUpdatedDate) {
        this.taskUpdatedDate = taskUpdatedDate;
    }
}
