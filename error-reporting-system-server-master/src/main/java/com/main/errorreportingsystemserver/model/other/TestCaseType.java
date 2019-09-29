package com.main.errorreportingsystemserver.model.other;

import javax.persistence.*;

@Entity
@Table(name = "test_case_type")
public class TestCaseType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_case_type_id")
    private Long id;

    @Column(name = "test_case_id", nullable = false)
    private Long testCaseId;

    @Column(name = "test_case_type_name", nullable = false)
    private String testCaseName;

    public TestCaseType() {
    }

    public TestCaseType(Long testCaseId, String testCaseName) {
        this.testCaseId = testCaseId;
        this.testCaseName = testCaseName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTestCaseId() {
        return testCaseId;
    }

    public void setTestCaseId(Long testCaseId) {
        this.testCaseId = testCaseId;
    }

    public String getTestCaseName() {
        return testCaseName;
    }

    public void setTestCaseName(String testCaseName) {
        this.testCaseName = testCaseName;
    }
}
