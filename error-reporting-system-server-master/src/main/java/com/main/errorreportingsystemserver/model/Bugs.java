package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "bugs")
public class Bugs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bug_id")
    private Long id;

    @Column(name = "bug_title", nullable = true)
    private String bugTitle;

    @Column(name = "description", nullable = true)
    private String bugDescription;

    @Column(name = "sprint_id", nullable = true)
    private Long bugSprintId;

    @Column(name = "test_case_id", nullable = true)
    private Long bugTestCaseId;

    @Column(name = "project_id", nullable = true)
    private Long bugProjectId;

    @Column(name = "feature_id", nullable = true)
    private Long bugFeatureId;

    @Column(name = "assignee_id", nullable = true)
    private Long bugAssigneeId;

    @Column(name = "severity", nullable = true)
    private String bugSeverity;

    @Column(name = "priority", nullable = true)
    private String bugPriority;

    @Column(name = "status", nullable = true)
    private String bugStatus;

    @Column(name = "reporter_id", nullable = true)
    private Long bugReporterId;

    @Column(name = "environment", nullable = false)
    private String bugEnvironment;

    @Column(name = "steps_to_reproduce", nullable = true)
    private String bugStepToReproduce;

    @Column(name = "created_date", nullable = true)
    private String bugCreatedDate;

    @Column(name = "updated_date", nullable = true)
    private String bugUpdatedDate;

    public Bugs() {
    }

    public Bugs(String bugTitle, String bugDescription, Long bugSprintId, Long bugTestCaseId, Long bugProjectId, Long bugFeatureId, Long bugAssigneeId, String bugSeverity, String bugPriority, String bugStatus, Long bugReporterId, String bugEnvironment, String bugStepToReproduce, String bugCreatedDate, String bugUpdatedDate) {
        this.bugTitle = bugTitle;
        this.bugDescription = bugDescription;
        this.bugSprintId = bugSprintId;
        this.bugTestCaseId = bugTestCaseId;
        this.bugProjectId = bugProjectId;
        this.bugFeatureId = bugFeatureId;
        this.bugAssigneeId = bugAssigneeId;
        this.bugSeverity = bugSeverity;
        this.bugPriority = bugPriority;
        this.bugStatus = bugStatus;
        this.bugReporterId = bugReporterId;
        this.bugEnvironment = bugEnvironment;
        this.bugStepToReproduce = bugStepToReproduce;
        this.bugCreatedDate = bugCreatedDate;
        this.bugUpdatedDate = bugUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBugTitle() {
        return bugTitle;
    }

    public void setBugTitle(String bugTitle) {
        this.bugTitle = bugTitle;
    }

    public String getBugDescription() {
        return bugDescription;
    }

    public void setBugDescription(String bugDescription) {
        this.bugDescription = bugDescription;
    }

    public Long getBugSprintId() {
        return bugSprintId;
    }

    public void setBugSprintId(Long bugSprintId) {
        this.bugSprintId = bugSprintId;
    }

    public Long getBugTestCaseId() {
        return bugTestCaseId;
    }

    public void setBugTestCaseId(Long bugTestCaseId) {
        this.bugTestCaseId = bugTestCaseId;
    }

    public Long getBugProjectId() {
        return bugProjectId;
    }

    public void setBugProjectId(Long bugProjectId) {
        this.bugProjectId = bugProjectId;
    }

    public Long getBugFeatureId() {
        return bugFeatureId;
    }

    public void setBugFeatureId(Long bugFeatureId) {
        this.bugFeatureId = bugFeatureId;
    }

    public Long getBugAssigneeId() {
        return bugAssigneeId;
    }

    public void setBugAssigneeId(Long bugAssigneeId) {
        this.bugAssigneeId = bugAssigneeId;
    }

    public String getBugSeverity() {
        return bugSeverity;
    }

    public void setBugSeverity(String bugSeverity) {
        this.bugSeverity = bugSeverity;
    }

    public String getBugPriority() {
        return bugPriority;
    }

    public void setBugPriority(String bugPriority) {
        this.bugPriority = bugPriority;
    }

    public String getBugStatus() {
        return bugStatus;
    }

    public void setBugStatus(String bugStatus) {
        this.bugStatus = bugStatus;
    }

    public Long getBugReporterId() {
        return bugReporterId;
    }

    public void setBugReporterId(Long bugReporterId) {
        this.bugReporterId = bugReporterId;
    }

    public String getBugEnvironment() {
        return bugEnvironment;
    }

    public void setBugEnvironment(String bugEnvironment) {
        this.bugEnvironment = bugEnvironment;
    }

    public String getBugStepToReproduce() {
        return bugStepToReproduce;
    }

    public void setBugStepToReproduce(String bugStepToReproduce) {
        this.bugStepToReproduce = bugStepToReproduce;
    }

    public String getBugCreatedDate() {
        return bugCreatedDate;
    }

    public void setBugCreatedDate(String bugCreatedDate) {
        this.bugCreatedDate = bugCreatedDate;
    }

    public String getBugUpdatedDate() {
        return bugUpdatedDate;
    }

    public void setBugUpdatedDate(String bugUpdatedDate) {
        this.bugUpdatedDate = bugUpdatedDate;
    }
}
