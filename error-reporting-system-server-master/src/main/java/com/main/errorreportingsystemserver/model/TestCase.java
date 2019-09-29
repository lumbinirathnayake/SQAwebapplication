package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "test_case")
public class TestCase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_case_id")
    private Long id;

    @Column(name = "test_case_title", nullable = false)
    private String testCaseTitle;

    @Column(name = "project_id", nullable = true)
    private Long testCaseProjectId;

    @Column(name = "feature_id", nullable = true)
    private Long testCaseFeatureId;

    @Column(name = "feature_group_id", nullable = true)
    private String testCaseFeatureGroupId;

    @Column(name = "priority", nullable = true)
    private String testCasePriority;

    @Column(name = "status", nullable = true)
    private String testCaseStatus;

    @Column(name = "severity", nullable = true)
    private String testCaseSeverity;

    @Column(name = "assignee_id", nullable = true)
    private Long testCaseAssigneeId;

    @Column(name = "automation_status", nullable = true)
    private String testCaseAutomationStatus;

    @Column(name = "creator_id", nullable = true)
    private Long testCaseCreatorId;

    @Column(name = "test_step", nullable = true)
    private String testCaseTestStep;

    @Column(name = "expected_result", nullable = true)
    private String testCaseExpectedResult;

    @Column(name = "created_date", nullable = true)
    private String testCaseCreatedDate;

    @Column(name = "updated_date", nullable = true)
    private String testCaseUpdatedDate;

    public TestCase() {
    }

    public TestCase(String testCaseTitle, Long testCaseProjectId, Long testCaseFeatureId, String testCaseFeatureGroupId, String testCasePriority, String testCaseStatus, String testCaseSeverity, Long testCaseAssigneeId, String testCaseAutomationStatus, Long testCaseCreatorId, String testCaseTestStep, String testCaseExpectedResult, String testCaseCreatedDate, String testCaseUpdatedDate) {
        this.testCaseTitle = testCaseTitle;
        this.testCaseProjectId = testCaseProjectId;
        this.testCaseFeatureId = testCaseFeatureId;
        this.testCaseFeatureGroupId = testCaseFeatureGroupId;
        this.testCasePriority = testCasePriority;
        this.testCaseStatus = testCaseStatus;
        this.testCaseSeverity = testCaseSeverity;
        this.testCaseAssigneeId = testCaseAssigneeId;
        this.testCaseAutomationStatus = testCaseAutomationStatus;
        this.testCaseCreatorId = testCaseCreatorId;
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

    public String getTestCaseAutomationStatus() {
        return testCaseAutomationStatus;
    }

    public void setTestCaseAutomationStatus(String testCaseAutomationStatus) {
        this.testCaseAutomationStatus = testCaseAutomationStatus;
    }

    public Long getTestCaseCreatorId() {
        return testCaseCreatorId;
    }

    public void setTestCaseCreatorId(Long testCaseCreatorId) {
        this.testCaseCreatorId = testCaseCreatorId;
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
