package com.main.errorreportingsystemserver.model.dto;

public class TestCaseDto {
    private Long id;
    private String testCaseTitle;
    private Long testCaseProjectId;
    private Long testCaseFeatureId;
    private String testCaseFeatureGroupId;
    private String testCaseFeatureName;
    private String testCasePriority;
    private String testCaseStatus;
    private String testCaseSeverity;
    private Long testCaseAssigneeId;
    private String testCaseAssigneeFName;
    private String testCaseAssigneeLName;
    private String testCaseAutomationStatus;
    private String[] testCaseType;
    private Long testCaseCreatorId;
    private String testCaseCreatorFName;
    private String testCaseCreatorLName;
    private String testCaseTestStep;
    private String testCaseExpectedResult;
    private String testCaseCreatedDate;
    private String testCaseUpdatedDate;

    public TestCaseDto(Long id, String testCaseTitle, Long testCaseProjectId, Long testCaseFeatureId, String testCaseFeatureGroupId, String testCaseFeatureName, String testCasePriority, String testCaseStatus, String testCaseSeverity, Long testCaseAssigneeId, String testCaseAssigneeFName, String testCaseAssigneeLName, String testCaseAutomationStatus, String[] testCaseType, Long testCaseCreatorId, String testCaseCreatorFName, String testCaseCreatorLName, String testCaseTestStep, String testCaseExpectedResult, String testCaseCreatedDate, String testCaseUpdatedDate) {
        this.id = id;
        this.testCaseTitle = testCaseTitle;
        this.testCaseProjectId = testCaseProjectId;
        this.testCaseFeatureId = testCaseFeatureId;
        this.testCaseFeatureGroupId = testCaseFeatureGroupId;
        this.testCaseFeatureName = testCaseFeatureName;
        this.testCasePriority = testCasePriority;
        this.testCaseStatus = testCaseStatus;
        this.testCaseSeverity = testCaseSeverity;
        this.testCaseAssigneeId = testCaseAssigneeId;
        this.testCaseAssigneeFName = testCaseAssigneeFName;
        this.testCaseAssigneeLName = testCaseAssigneeLName;
        this.testCaseAutomationStatus = testCaseAutomationStatus;
        this.testCaseType = testCaseType;
        this.testCaseCreatorId = testCaseCreatorId;
        this.testCaseCreatorFName = testCaseCreatorFName;
        this.testCaseCreatorLName = testCaseCreatorLName;
        this.testCaseTestStep = testCaseTestStep;
        this.testCaseExpectedResult = testCaseExpectedResult;
        this.testCaseCreatedDate = testCaseCreatedDate;
        this.testCaseUpdatedDate = testCaseUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTestCaseTitle() {
        return testCaseTitle;
    }

    public void setTestCaseTitle(String testCaseTitle) {
        this.testCaseTitle = testCaseTitle;
    }

    public Long getTestCaseProjectId() {
        return testCaseProjectId;
    }

    public void setTestCaseProjectId(Long testCaseProjectId) {
        this.testCaseProjectId = testCaseProjectId;
    }

    public Long getTestCaseFeatureId() {
        return testCaseFeatureId;
    }

    public void setTestCaseFeatureId(Long testCaseFeatureId) {
        this.testCaseFeatureId = testCaseFeatureId;
    }

    public String getTestCaseFeatureGroupId() {
        return testCaseFeatureGroupId;
    }

    public void setTestCaseFeatureGroupId(String testCaseFeatureGroupId) {
        this.testCaseFeatureGroupId = testCaseFeatureGroupId;
    }

    public String getTestCaseFeatureName() {
        return testCaseFeatureName;
    }

    public void setTestCaseFeatureName(String testCaseFeatureName) {
        this.testCaseFeatureName = testCaseFeatureName;
    }

    public String getTestCasePriority() {
        return testCasePriority;
    }

    public void setTestCasePriority(String testCasePriority) {
        this.testCasePriority = testCasePriority;
    }

    public String getTestCaseStatus() {
        return testCaseStatus;
    }

    public void setTestCaseStatus(String testCaseStatus) {
        this.testCaseStatus = testCaseStatus;
    }

    public String getTestCaseSeverity() {
        return testCaseSeverity;
    }

    public void setTestCaseSeverity(String testCaseSeverity) {
        this.testCaseSeverity = testCaseSeverity;
    }

    public Long getTestCaseAssigneeId() {
        return testCaseAssigneeId;
    }

    public void setTestCaseAssigneeId(Long testCaseAssigneeId) {
        this.testCaseAssigneeId = testCaseAssigneeId;
    }

    public String getTestCaseAssigneeFName() {
        return testCaseAssigneeFName;
    }

    public void setTestCaseAssigneeFName(String testCaseAssigneeFName) {
        this.testCaseAssigneeFName = testCaseAssigneeFName;
    }

    public String getTestCaseAssigneeLName() {
        return testCaseAssigneeLName;
    }

    public void setTestCaseAssigneeLName(String testCaseAssigneeLName) {
        this.testCaseAssigneeLName = testCaseAssigneeLName;
    }

    public String getTestCaseAutomationStatus() {
        return testCaseAutomationStatus;
    }

    public void setTestCaseAutomationStatus(String testCaseAutomationStatus) {
        this.testCaseAutomationStatus = testCaseAutomationStatus;
    }

    public String[] getTestCaseType() {
        return testCaseType;
    }

    public void setTestCaseType(String[] testCaseType) {
        this.testCaseType = testCaseType;
    }

    public Long getTestCaseCreatorId() {
        return testCaseCreatorId;
    }

    public void setTestCaseCreatorId(Long testCaseCreatorId) {
        this.testCaseCreatorId = testCaseCreatorId;
    }

    public String getTestCaseCreatorFName() {
        return testCaseCreatorFName;
    }

    public void setTestCaseCreatorFName(String testCaseCreatorFName) {
        this.testCaseCreatorFName = testCaseCreatorFName;
    }

    public String getTestCaseCreatorLName() {
        return testCaseCreatorLName;
    }

    public void setTestCaseCreatorLName(String testCaseCreatorLName) {
        this.testCaseCreatorLName = testCaseCreatorLName;
    }

    public String getTestCaseTestStep() {
        return testCaseTestStep;
    }

    public void setTestCaseTestStep(String testCaseTestStep) {
        this.testCaseTestStep = testCaseTestStep;
    }

    public String getTestCaseExpectedResult() {
        return testCaseExpectedResult;
    }

    public void setTestCaseExpectedResult(String testCaseExpectedResult) {
        this.testCaseExpectedResult = testCaseExpectedResult;
    }

    public String getTestCaseCreatedDate() {
        return testCaseCreatedDate;
    }

    public void setTestCaseCreatedDate(String testCaseCreatedDate) {
        this.testCaseCreatedDate = testCaseCreatedDate;
    }

    public String getTestCaseUpdatedDate() {
        return testCaseUpdatedDate;
    }

    public void setTestCaseUpdatedDate(String testCaseUpdatedDate) {
        this.testCaseUpdatedDate = testCaseUpdatedDate;
    }
}
