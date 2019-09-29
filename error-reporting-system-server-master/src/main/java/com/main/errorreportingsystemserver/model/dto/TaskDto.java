package com.main.errorreportingsystemserver.model.dto;

public class TaskDto {
    private Long id;
    private String taskName;
    private Long taskProjectId;
    private Long taskStoryId;
    private String taskStoryName;
    private Long taskFeatureId;
    private String taskFeatureName;
    private Long taskSprintId;
    private String taskSprintName;
    private String taskSummery;
    private String taskDescription;
    private String taskStartDate;
    private String taskEndDate;
    private Long taskAssigneeId;
    private String taskAssigneeFName;
    private String taskAssigneeLName;
    private Long taskCreattorId;
    private String taskCreattorFName;
    private String taskCreattorLName;
    private String taskStatus;
    private String taskEstimatedTime;
    private String taskLoggedTime;
    private String taskRemainingTime;
    private String taskCreatedDate;
    private String taskUpdatedDate;

    public TaskDto(Long id, String taskName, Long taskProjectId, Long taskStoryId, String taskStoryName, Long taskFeatureId, String taskFeatureName, Long taskSprintId, String taskSprintName, String taskSummery, String taskDescription, String taskStartDate, String taskEndDate, Long taskAssigneeId, String taskAssigneeFName, String taskAssigneeLName, Long taskCreattorId, String taskCreattorFName, String taskCreattorLName, String taskStatus, String taskEstimatedTime, String taskLoggedTime, String taskRemainingTime, String taskCreatedDate, String taskUpdatedDate) {
        this.id = id;
        this.taskName = taskName;
        this.taskProjectId = taskProjectId;
        this.taskStoryId = taskStoryId;
        this.taskStoryName = taskStoryName;
        this.taskFeatureId = taskFeatureId;
        this.taskFeatureName = taskFeatureName;
        this.taskSprintId = taskSprintId;
        this.taskSprintName = taskSprintName;
        this.taskSummery = taskSummery;
        this.taskDescription = taskDescription;
        this.taskStartDate = taskStartDate;
        this.taskEndDate = taskEndDate;
        this.taskAssigneeId = taskAssigneeId;
        this.taskAssigneeFName = taskAssigneeFName;
        this.taskAssigneeLName = taskAssigneeLName;
        this.taskCreattorId = taskCreattorId;
        this.taskCreattorFName = taskCreattorFName;
        this.taskCreattorLName = taskCreattorLName;
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

    public String getTaskStoryName() {
        return taskStoryName;
    }

    public void setTaskStoryName(String taskStoryName) {
        this.taskStoryName = taskStoryName;
    }

    public Long getTaskFeatureId() {
        return taskFeatureId;
    }

    public void setTaskFeatureId(Long taskFeatureId) {
        this.taskFeatureId = taskFeatureId;
    }

    public String getTaskFeatureName() {
        return taskFeatureName;
    }

    public void setTaskFeatureName(String taskFeatureName) {
        this.taskFeatureName = taskFeatureName;
    }

    public Long getTaskSprintId() {
        return taskSprintId;
    }

    public void setTaskSprintId(Long taskSprintId) {
        this.taskSprintId = taskSprintId;
    }

    public String getTaskSprintName() {
        return taskSprintName;
    }

    public void setTaskSprintName(String taskSprintName) {
        this.taskSprintName = taskSprintName;
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

    public String getTaskAssigneeFName() {
        return taskAssigneeFName;
    }

    public void setTaskAssigneeFName(String taskAssigneeFName) {
        this.taskAssigneeFName = taskAssigneeFName;
    }

    public String getTaskAssigneeLName() {
        return taskAssigneeLName;
    }

    public void setTaskAssigneeLName(String taskAssigneeLName) {
        this.taskAssigneeLName = taskAssigneeLName;
    }

    public Long getTaskCreattorId() {
        return taskCreattorId;
    }

    public void setTaskCreattorId(Long taskCreattorId) {
        this.taskCreattorId = taskCreattorId;
    }

    public String getTaskCreattorFName() {
        return taskCreattorFName;
    }

    public void setTaskCreattorFName(String taskCreattorFName) {
        this.taskCreattorFName = taskCreattorFName;
    }

    public String getTaskCreattorLName() {
        return taskCreattorLName;
    }

    public void setTaskCreattorLName(String taskCreattorLName) {
        this.taskCreattorLName = taskCreattorLName;
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
