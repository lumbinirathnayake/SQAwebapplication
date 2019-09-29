package com.main.errorreportingsystemserver.model.dto;

public class TestCaseFeatureGroupDto {
    private Long id;
    private Long testCaseFeatureId;
    private String testCaseFeatureGroupName;

    public TestCaseFeatureGroupDto(Long id, Long testCaseFeatureId, String testCaseFeatureGroupName) {
        this.id = id;
        this.testCaseFeatureId = testCaseFeatureId;
        this.testCaseFeatureGroupName = testCaseFeatureGroupName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTestCaseFeatureId() {
        return testCaseFeatureId;
    }

    public void setTestCaseFeatureId(Long testCaseFeatureId) {
        this.testCaseFeatureId = testCaseFeatureId;
    }

    public String getTestCaseFeatureGroupName() {
        return testCaseFeatureGroupName;
    }

    public void setTestCaseFeatureGroupName(String testCaseFeatureGroupName) {
        this.testCaseFeatureGroupName = testCaseFeatureGroupName;
    }
}
