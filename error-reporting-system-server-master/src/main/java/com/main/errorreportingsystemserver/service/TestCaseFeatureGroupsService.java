package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.TestCaseFeatureGroupDto;
import com.main.errorreportingsystemserver.model.other.TestCaseFeatureGroup;

import java.util.List;

public interface TestCaseFeatureGroupsService {
    void createTestCaseFeatureGroup(TestCaseFeatureGroupDto testCaseFeatureGroupDto);

    List<TestCaseFeatureGroupDto> getAllTestCaseFeatureGroups();

    TestCaseFeatureGroupDto getSingleTestCaseFeatureGroup(Long id);

    void updateTestCaseFeatureGroup(Long id, TestCaseFeatureGroupDto testCaseFeatureGroupDto);

    void deleteTestCaseFeatureGroupByFeatureId(Long id);

    void deleteTestCaseFeatureGroup(Long id);
}
