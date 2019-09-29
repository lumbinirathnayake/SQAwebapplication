package com.main.errorreportingsystemserver.model.other;

import javax.persistence.*;

@Entity
@Table(name = "test_case_feature_groups")
public class TestCaseFeatureGroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private Long id;

    @Column(name = "feature_id", nullable = true)
    private Long testCaseFetureId;

    @Column(name = "feature_group_name", nullable = true)
    private String testCaseFeatureGroupName;

    public TestCaseFeatureGroup() {
    }

    public TestCaseFeatureGroup(Long testCaseFetureId, String testCaseFeatureGroupName) {
        this.testCaseFetureId = testCaseFetureId;
        this.testCaseFeatureGroupName = testCaseFeatureGroupName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTestCaseFetureId() {
        return testCaseFetureId;
    }

    public void setTestCaseFetureId(Long testCaseFetureId) {
        this.testCaseFetureId = testCaseFetureId;
    }

    public String getTestCaseFeatureGroupName() {
        return testCaseFeatureGroupName;
    }

    public void setTestCaseFeatureGroupName(String testCaseFeatureGroupName) {
        this.testCaseFeatureGroupName = testCaseFeatureGroupName;
    }
}
