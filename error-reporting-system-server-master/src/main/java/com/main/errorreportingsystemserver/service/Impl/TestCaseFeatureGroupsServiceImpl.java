package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.other.TestCaseFeatureGroupsDao;
import com.main.errorreportingsystemserver.model.dto.TestCaseFeatureGroupDto;
import com.main.errorreportingsystemserver.model.other.TestCaseFeatureGroup;
import com.main.errorreportingsystemserver.service.TestCaseFeatureGroupsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestCaseFeatureGroupsServiceImpl implements TestCaseFeatureGroupsService {
    @Autowired
    private TestCaseFeatureGroupsDao testCaseFeatureGroupsDao;

    @Override
    public void createTestCaseFeatureGroup(TestCaseFeatureGroupDto testCaseFeatureGroupDto) {
        TestCaseFeatureGroup testCaseFeatureGroup = new TestCaseFeatureGroup(
                testCaseFeatureGroupDto.getTestCaseFeatureId(),
                testCaseFeatureGroupDto.getTestCaseFeatureGroupName()
        );
        testCaseFeatureGroupsDao.save(testCaseFeatureGroup);
    }

    @Override
    public List<TestCaseFeatureGroupDto> getAllTestCaseFeatureGroups() {
        List<TestCaseFeatureGroup> testCaseFeatureGroups = testCaseFeatureGroupsDao.findAll();
        List<TestCaseFeatureGroupDto> testCaseFeatureGroupDtos = new ArrayList<>();
        for (TestCaseFeatureGroup testCaseFeatureGroup: testCaseFeatureGroups) {
            testCaseFeatureGroupDtos.add(getTestCaseFeatureGroupDto(testCaseFeatureGroup));
        }
        return testCaseFeatureGroupDtos;
    }

    @Override
    public TestCaseFeatureGroupDto getSingleTestCaseFeatureGroup(Long id) {
        TestCaseFeatureGroup testCaseFeatureGroup = testCaseFeatureGroupsDao.getSingleTestCaseFeatureGroup(id);
        return getTestCaseFeatureGroupDto(testCaseFeatureGroup);
    }

    private TestCaseFeatureGroupDto getTestCaseFeatureGroupDto(TestCaseFeatureGroup testCaseFeatureGroup) {
        TestCaseFeatureGroupDto testCaseFeatureGroupDto = new TestCaseFeatureGroupDto(
                testCaseFeatureGroup.getId(), testCaseFeatureGroup.getTestCaseFetureId(),
                testCaseFeatureGroup.getTestCaseFeatureGroupName()
        );
        return testCaseFeatureGroupDto;
    }

    @Override
    public void updateTestCaseFeatureGroup(Long id, TestCaseFeatureGroupDto testCaseFeatureGroupDto) {
        TestCaseFeatureGroup existingTestCaseFeatureGroup = testCaseFeatureGroupsDao.getSingleTestCaseFeatureGroup(id);

        existingTestCaseFeatureGroup.setTestCaseFetureId(testCaseFeatureGroupDto.getTestCaseFeatureId());
        existingTestCaseFeatureGroup.setTestCaseFeatureGroupName(testCaseFeatureGroupDto.getTestCaseFeatureGroupName());

        testCaseFeatureGroupsDao.save(existingTestCaseFeatureGroup);
    }

    @Override
    public void deleteTestCaseFeatureGroupByFeatureId(Long id) {
        testCaseFeatureGroupsDao.deleteTestCaseFeatureGroupByFeatureId(id);
    }

    @Override
    public void deleteTestCaseFeatureGroup(Long id) {
        testCaseFeatureGroupsDao.deleteTestCaseFeatureGroup(id);
    }
}
