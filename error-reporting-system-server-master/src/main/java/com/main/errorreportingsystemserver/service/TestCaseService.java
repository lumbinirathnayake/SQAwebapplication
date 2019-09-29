package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.TestCaseDto;

import java.util.List;

public interface TestCaseService {
    void createTestCase(TestCaseDto testCaseDto);

    List<TestCaseDto> getAllTestCases();

    TestCaseDto getSingleTestCase(Long id);

    void updateTestCase(Long id, TestCaseDto testCaseDto);

    void deleteTestCase(Long id);
}
