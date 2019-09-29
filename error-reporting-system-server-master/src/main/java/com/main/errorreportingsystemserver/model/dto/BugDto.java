package com.main.errorreportingsystemserver.model.dto;

public class BugDto {
    private Long id;
    private String bugTitle;
    private String bugDescription;
    private Long bugSprintId;
    private Long bugTestCaseId;
    private String bugTestCaseName;
    private Long bugProjectId;
    private String bugProjectName;
    private Long bugFeatureId;
    private String bugFeatureName;
    private Long bugAssigneeId;
    private String bugAssigneeFName;
    private String bugAssigneeLName;
    private String bugSeverity;
    private String bugPriority;
    private String bugStatus;
    private Long bugReporterId;
    private String bugReporterFName;
    private String bugReporterLName;
    private String bugEnvironment;
    private String bugStepToReproduce;
    private String bugCreatedDate;
    private String bugUpdatedDate;

    public BugDto(Long id, String bugTitle, String bugDescription, Long bugSprintId, Long bugTestCaseId, String bugTestCaseName, Long bugProjectId, String bugProjectName, Long bugFeatureId, String bugFeatureName, Long bugAssigneeId, String bugAssigneeFName, String bugAssigneeLName, String bugSeverity, String bugPriority, String bugStatus, Long bugReporterId, String bugReporterFName, String bugReporterLName, String bugEnvironment, String bugStepToReproduce, String bugCreatedDate, String bugUpdatedDate) {
        this.id = id;
        this.bugTitle = bugTitle;
        this.bugDescription = bugDescription;
        this.bugSprintId = bugSprintId;
        this.bugTestCaseId = bugTestCaseId;
        this.bugTestCaseName = bugTestCaseName;
        this.bugProjectId = bugProjectId;
        this.bugProjectName = bugProjectName;
        this.bugFeatureId = bugFeatureId;
        this.bugFeatureName = bugFeatureName;
        this.bugAssigneeId = bugAssigneeId;
        this.bugAssigneeFName = bugAssigneeFName;
        this.bugAssigneeLName = bugAssigneeLName;
        this.bugSeverity = bugSeverity;
        this.bugPriority = bugPriority;
        this.bugStatus = bugStatus;
        this.bugReporterId = bugReporterId;
        this.bugReporterFName = bugReporterFName;
        this.bugReporterLName = bugReporterLName;
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

    public String getBugTestCaseName() {
        return bugTestCaseName;
    }

    public void setBugTestCaseName(String bugTestCaseName) {
        this.bugTestCaseName = bugTestCaseName;
    }

    public Long getBugProjectId() {
        return bugProjectId;
    }

    public void setBugProjectId(Long bugProjectId) {
        this.bugProjectId = bugProjectId;
    }

    public String getBugProjectName() {
        return bugProjectName;
    }

    public void setBugProjectName(String bugProjectName) {
        this.bugProjectName = bugProjectName;
    }

    public Long getBugFeatureId() {
        return bugFeatureId;
    }

    public void setBugFeatureId(Long bugFeatureId) {
        this.bugFeatureId = bugFeatureId;
    }

    public String getBugFeatureName() {
        return bugFeatureName;
    }

    public void setBugFeatureName(String bugFeatureName) {
        this.bugFeatureName = bugFeatureName;
    }

    public Long getBugAssigneeId() {
        return bugAssigneeId;
    }

    public void setBugAssigneeId(Long bugAssigneeId) {
        this.bugAssigneeId = bugAssigneeId;
    }

    public String getBugAssigneeFName() {
        return bugAssigneeFName;
    }

    public void setBugAssigneeFName(String bugAssigneeFName) {
        this.bugAssigneeFName = bugAssigneeFName;
    }

    public String getBugAssigneeLName() {
        return bugAssigneeLName;
    }

    public void setBugAssigneeLName(String bugAssigneeLName) {
        this.bugAssigneeLName = bugAssigneeLName;
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

    public String getBugReporterFName() {
        return bugReporterFName;
    }

    public void setBugReporterFName(String bugReporterFName) {
        this.bugReporterFName = bugReporterFName;
    }

    public String getBugReporterLName() {
        return bugReporterLName;
    }

    public void setBugReporterLName(String bugReporterLName) {
        this.bugReporterLName = bugReporterLName;
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
