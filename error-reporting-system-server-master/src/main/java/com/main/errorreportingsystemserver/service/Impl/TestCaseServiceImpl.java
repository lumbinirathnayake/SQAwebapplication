package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.FeatureDao;
import com.main.errorreportingsystemserver.dao.TestCaseDao;
import com.main.errorreportingsystemserver.dao.UserDao;
import com.main.errorreportingsystemserver.dao.other.TestCaseTypeDao;
import com.main.errorreportingsystemserver.model.Features;
import com.main.errorreportingsystemserver.model.TestCase;
import com.main.errorreportingsystemserver.model.User;
import com.main.errorreportingsystemserver.model.dto.TestCaseDto;
import com.main.errorreportingsystemserver.model.other.TestCaseType;
import com.main.errorreportingsystemserver.service.TestCaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestCaseServiceImpl implements TestCaseService {
    @Autowired
    private TestCaseDao testCaseDao;
    @Autowired
    private TestCaseTypeDao testCaseTypeDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private FeatureDao featureDao;

    @Override
    public void createTestCase(TestCaseDto testCaseDto) {
        TestCase newTestCase = new TestCase(
                testCaseDto.getTestCaseTitle(), testCaseDto.getTestCaseProjectId(), testCaseDto.getTestCaseFeatureId(),
                testCaseDto.getTestCaseFeatureGroupId(), testCaseDto.getTestCasePriority(),
                testCaseDto.getTestCaseStatus(), testCaseDto.getTestCaseSeverity(),
                testCaseDto.getTestCaseAssigneeId(), testCaseDto.getTestCaseAutomationStatus(),
                testCaseDto.getTestCaseCreatorId(), testCaseDto.getTestCaseTestStep(),
                testCaseDto.getTestCaseExpectedResult(), testCaseDto.getTestCaseCreatedDate(),
                testCaseDto.getTestCaseUpdatedDate()
        );
        TestCase savedTesetCase = testCaseDao.save(newTestCase);

        if (testCaseDto.getTestCaseType().length != 0) {
            for (String testCaseTYpeName: testCaseDto.getTestCaseType()) {
                TestCaseType testCaseType = new TestCaseType(
                        savedTesetCase.getId(), testCaseTYpeName);
                testCaseTypeDao.save(testCaseType);
            }
        }
    }

    @Override
    public List<TestCaseDto> getAllTestCases() {
        List<TestCase> testCaseList = testCaseDao.findAll();
        List<TestCaseDto> testCaseDtoList = new ArrayList<>();

        if (testCaseList.size() != 0) {
            for (TestCase testCase: testCaseList) {
                testCaseDtoList.add(getTestCaseDto(testCase));
            }
        }

        return testCaseDtoList;
    }

    @Override
    public TestCaseDto getSingleTestCase(Long id) {
        TestCase testCase = testCaseDao.getSingleTestCase(id);
        return getTestCaseDto(testCase);
    }

    private TestCaseDto getTestCaseDto(TestCase testCase) {
        User assignee = userDao.getSingleUser(testCase.getTestCaseAssigneeId());
        User creator = userDao.getSingleUser(testCase.getTestCaseCreatorId());
        Features feature = featureDao.getSingleFeature(testCase.getTestCaseFeatureId());

        List<TestCaseType> testCaseTypeList = testCaseTypeDao.getTestCaseTypeNameByTestCaseId(testCase.getId());
        List<String> testCaseTypeNamesList = new ArrayList<>();
        for (TestCaseType testCaseType: testCaseTypeList)
            testCaseTypeNamesList.add(testCaseType.getTestCaseName());
        String[] testCaseTypeName = testCaseTypeNamesList.toArray(new String[0]);

        TestCaseDto testCaseDto = new TestCaseDto(
                testCase.getId(), testCase.getTestCaseTitle(), testCase.getTestCaseProjectId(),
                feature.getId(), testCase.getTestCaseFeatureGroupId(),
                feature.getFeatureName(), testCase.getTestCasePriority(),
                testCase.getTestCaseStatus(), testCase.getTestCaseSeverity(),
                assignee.getId(), assignee.getUserFname(), assignee.getUserLName(),
                testCase.getTestCaseAutomationStatus(), testCaseTypeName,
                creator.getId(), creator.getUserFname(), creator.getUserLName(), testCase.getTestCaseTestStep(),
                testCase.getTestCaseExpectedResult(), testCase.getTestCaseCreatedDate(), testCase.getTestCaseUpdatedDate()
        );

        return testCaseDto;
    }

    @Override
    public void updateTestCase(Long id, TestCaseDto testCaseDto) {
        TestCase existingTestCase = testCaseDao.getSingleTestCase(id);

        existingTestCase.setTestCaseTitle(testCaseDto.getTestCaseTitle());
        existingTestCase.setTestCaseFeatureGroupId(testCaseDto.getTestCaseFeatureGroupId());
        existingTestCase.setTestCaseFeatureId(testCaseDto.getTestCaseFeatureId());
        existingTestCase.setTestCasePriority(testCaseDto.getTestCasePriority());
        existingTestCase.setTestCaseStatus(testCaseDto.getTestCaseStatus());
        existingTestCase.setTestCaseSeverity(testCaseDto.getTestCaseSeverity());
        existingTestCase.setTestCaseAssigneeId(testCaseDto.getTestCaseAssigneeId());
        existingTestCase.setTestCaseAutomationStatus(testCaseDto.getTestCaseAutomationStatus());
        existingTestCase.setTestCaseCreatorId(testCaseDto.getTestCaseCreatorId());
        existingTestCase.setTestCaseTestStep(testCaseDto.getTestCaseTestStep());
        existingTestCase.setTestCaseExpectedResult(testCaseDto.getTestCaseExpectedResult());
        existingTestCase.setTestCaseCreatedDate(testCaseDto.getTestCaseCreatedDate());
        existingTestCase.setTestCaseUpdatedDate(testCaseDto.getTestCaseUpdatedDate());

        testCaseDao.save(existingTestCase);


        testCaseTypeDao.deleteSingleTestCaseTypeByTestCaseId(testCaseDto.getId());
        if (testCaseDto.getTestCaseType().length != 0) {
            for (String testCaseTYpeName: testCaseDto.getTestCaseType()) {
                TestCaseType testCaseType = new TestCaseType(
                        existingTestCase.getId(), testCaseTYpeName);
                testCaseTypeDao.save(testCaseType);
            }
        }

    }

    @Override
    public void deleteTestCase(Long id) {
        testCaseDao.deleteSingleTestCase(id);
        testCaseTypeDao.deleteSingleTestCaseTypeByTestCaseId(id);
    }
}
