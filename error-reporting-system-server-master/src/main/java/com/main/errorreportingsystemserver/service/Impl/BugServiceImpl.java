package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.*;
import com.main.errorreportingsystemserver.model.*;
import com.main.errorreportingsystemserver.model.dto.BugDto;
import com.main.errorreportingsystemserver.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BugServiceImpl implements BugService {
    @Autowired
    private BugDao bugDao;
    @Autowired
    private SprintDao sprintDao;
    @Autowired
    private TestCaseDao testCaseDao;
    @Autowired
    private ProjectDao projectDao;
    @Autowired
    private FeatureDao featureDao;
    @Autowired
    private UserDao userDao;

    @Override
    public void createBug(BugDto bugDto) {
        Bugs newBug = new Bugs(
                bugDto.getBugTitle(), bugDto.getBugDescription(),
                bugDto.getBugSprintId(), bugDto.getBugTestCaseId(),
                bugDto.getBugProjectId(), bugDto.getBugFeatureId(),
                bugDto.getBugAssigneeId(), bugDto.getBugSeverity(),
                bugDto.getBugPriority(), bugDto.getBugStatus(),
                bugDto.getBugReporterId(), bugDto.getBugEnvironment(),
                bugDto.getBugStepToReproduce(), bugDto.getBugCreatedDate(),
                bugDto.getBugUpdatedDate()
        );

        bugDao.save(newBug);
    }

    @Override
    public List<BugDto> getAllBugs() {
        List<Bugs> bugs = bugDao.findAll();
        List<BugDto> bugDtos = new ArrayList<>();
        for (Bugs bug: bugs) {
            bugDtos.add(getBugDto(bug));
        }
        return bugDtos;
    }

    private BugDto getBugDto(Bugs bug) {
        Sprint sprint = sprintDao.getSingleSprint(bug.getBugSprintId());
        TestCase testCase = testCaseDao.getSingleTestCase(bug.getBugTestCaseId());
        Projects project = projectDao.getSingleProject(bug.getBugProjectId());
        Features feature = featureDao.getSingleFeature(bug.getBugFeatureId());
        User assignee = userDao.getSingleUser(bug.getBugAssigneeId());
        User reporter = userDao.getSingleUser(bug.getBugReporterId());

        BugDto bugDto = new BugDto(
                bug.getId(), bug.getBugTitle(), bug.getBugDescription(),
                sprint.getId(), testCase.getId(), testCase.getTestCaseTitle(),
                project.getId(), project.getProName(), feature.getId(), feature.getFeatureName(),
                assignee.getId(), assignee.getUserFname(), assignee.getUserLName(), bug.getBugSeverity(),
                bug.getBugPriority(), bug.getBugStatus(), reporter.getId(), reporter.getUserFname(),
                reporter.getUserLName(), bug.getBugEnvironment(), bug.getBugStepToReproduce(),
                bug.getBugCreatedDate(), bug.getBugUpdatedDate()
        );

        return bugDto;
    }

    @Override
    public BugDto getSingleBug(Long id) {
        Bugs bug = bugDao.getSingleBug(id);
        return getBugDto(bug);
    }

    @Override
    public void updateBug(Long id, BugDto bugDto) {
        Bugs existingBug = bugDao.getSingleBug(id);

        existingBug.setBugTitle(bugDto.getBugTitle());
        existingBug.setBugDescription(bugDto.getBugDescription());
        existingBug.setBugSprintId(bugDto.getBugSprintId());
        existingBug.setBugTestCaseId(bugDto.getBugTestCaseId());
        existingBug.setBugProjectId(bugDto.getBugProjectId());
        existingBug.setBugFeatureId(bugDto.getBugFeatureId());
        existingBug.setBugAssigneeId(bugDto.getBugAssigneeId());
        existingBug.setBugSeverity(bugDto.getBugSeverity());
        existingBug.setBugPriority(bugDto.getBugPriority());
        existingBug.setBugStatus(bugDto.getBugStatus());
        existingBug.setBugReporterId(bugDto.getBugReporterId());
        existingBug.setBugEnvironment(bugDto.getBugEnvironment());
        existingBug.setBugStepToReproduce(bugDto.getBugStepToReproduce());
        existingBug.setBugCreatedDate(bugDto.getBugCreatedDate());
        existingBug.setBugUpdatedDate(bugDto.getBugUpdatedDate());

        bugDao.save(existingBug);
    }

    @Override
    public void deleteBug(Long id) {
        bugDao.deleteSingleBug(id);
    }
}
