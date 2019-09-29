package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.SprintDao;
import com.main.errorreportingsystemserver.dao.UserDao;
import com.main.errorreportingsystemserver.model.Sprint;
import com.main.errorreportingsystemserver.model.User;
import com.main.errorreportingsystemserver.model.dto.SprintDto;
import com.main.errorreportingsystemserver.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SprintServiceImpl  implements SprintService {
    @Autowired
    private SprintDao sprintDao;
    @Autowired
    private UserDao userDao;

    @Override
    public void createSprint(SprintDto sprintDto) {
        Sprint newSprint = new Sprint(
                sprintDto.getSprintName(), sprintDto.getSprintProjectId(),
                sprintDto.getSprintSummery(), sprintDto.getSprintDescription(),
                sprintDto.getSprintCreatorId(), sprintDto.getSprintStatus(),
                sprintDto.getSprintStartDate(), sprintDto.getSprintEndDate(),
                sprintDto.getSprintCreatedDate(), sprintDto.getSprintUpdatedDate()
        );
        sprintDao.save(newSprint);
    }

    @Override
    public List<SprintDto> getAllSprint() {
        List<Sprint> sprintList = sprintDao.findAll();
        List<SprintDto> sprintDtoList = new ArrayList<>();

        for (Sprint sprint: sprintList) {
            sprintDtoList.add(getSprintDto(sprint));
        }
        return sprintDtoList;
    }

    private SprintDto getSprintDto(Sprint sprint) {
        User creator = userDao.getSingleUser(sprint.getSprintCreatorId());
        SprintDto sprintDto = new SprintDto(
                sprint.getId(), sprint.getSprintName(),
                sprint.getSprintProjectId(), sprint.getSprintSummery(),
                sprint.getSprintDescription(), creator.getId(),
                creator.getUserFname(), creator.getUserLName(),
                sprint.getSprintStatus(), sprint.getSprintStartDate(),
                sprint.getSprintEndDate(), sprint.getSprintCreatedDate(),
                sprint.getSprintUpdatedDate()
        );
        return sprintDto;
    }

    @Override
    public SprintDto getSingleSprint(Long id) {
        Sprint sprint = sprintDao.getSingleSprint(id);
        return getSprintDto(sprint);
    }

    @Override
    public void updateSprint(Long id, SprintDto sprintDto) {
        Sprint existingSprint = sprintDao.getSingleSprint(sprintDto.getId());

        existingSprint.setSprintName(sprintDto.getSprintName());
        existingSprint.setSprintProjectId(sprintDto.getSprintProjectId());
        existingSprint.setSprintSummery(sprintDto.getSprintSummery());
        existingSprint.setSprintDescription(sprintDto.getSprintDescription());
        existingSprint.setSprintCreatorId(sprintDto.getSprintCreatorId());
        existingSprint.setSprintStatus(sprintDto.getSprintStatus());
        existingSprint.setSprintStartDate(sprintDto.getSprintStartDate());
        existingSprint.setSprintEndDate(sprintDto.getSprintEndDate());
        existingSprint.setSprintCreatedDate(sprintDto.getSprintCreatedDate());
        existingSprint.setSprintUpdatedDate(sprintDto.getSprintUpdatedDate());

        sprintDao.save(existingSprint);

    }

    @Override
    public void deleteSprint(Long id) {
        sprintDao.deleteSingleSprint(id);
    }
}
