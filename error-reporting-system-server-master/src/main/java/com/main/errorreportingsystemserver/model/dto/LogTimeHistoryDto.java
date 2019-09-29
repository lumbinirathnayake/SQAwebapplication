package com.main.errorreportingsystemserver.model.dto;

public class LogTimeHistoryDto {
    private Long id;
    private Long taskId;
    private String date;
    private String loggedHours;

    public LogTimeHistoryDto(Long id, Long taskId, String date, String loggedHours) {
        this.id = id;
        this.taskId = taskId;
        this.date = date;
        this.loggedHours = loggedHours;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long taskId) {
        this.taskId = taskId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLoggedHours() {
        return loggedHours;
    }

    public void setLoggedHours(String loggedHours) {
        this.loggedHours = loggedHours;
    }
}
