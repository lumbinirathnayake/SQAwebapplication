package com.main.errorreportingsystemserver.model.other;

import javax.persistence.*;

@Entity
@Table(name = "log_time_history")
public class LogTimeHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "time_history_id")
    private Long id;

    @Column(name = "task_id", nullable = true)
    private Long taskId;

    @Column(name = "date", nullable = true)
    private String date;

    @Column(name = "logged_hours", nullable = true)
    private String loggedHours;

    public LogTimeHistory() {
    }

    public LogTimeHistory(Long taskId, String date, String loggedHours) {
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
