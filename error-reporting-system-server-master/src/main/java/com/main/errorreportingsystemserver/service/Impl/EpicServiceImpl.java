package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.EpicDao;
import com.main.errorreportingsystemserver.dao.UserDao;
import com.main.errorreportingsystemserver.model.Epic;
import com.main.errorreportingsystemserver.model.User;
import com.main.errorreportingsystemserver.model.dto.EpicDto;
import com.main.errorreportingsystemserver.service.EpicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EpicServiceImpl implements EpicService {
    @Autowired
    private EpicDao epicDao;
    @Autowired
    private UserDao userDao;

    @Override
    public void createEpic(EpicDto epicDto) {
        Epic newEpic = new Epic(
                epicDto.getProId(), epicDto.getEpicName(),
                epicDto.getEpicDescription(), epicDto.getEpicSummery(),
                epicDto.getEpicAssigneeId(), epicDto.getEpicStatus(),
                epicDto.getEpicStartDate(), epicDto.getEpicEndDate(),
                epicDto.getEpicCreatedDate(), epicDto.getEpicUpdatedDate()
        );
        epicDao.save(newEpic);
    }

    @Override
    public List<EpicDto> getAllEpics() {
        List<Epic> epics = epicDao.findAll();
        List<EpicDto> epicDtos = new ArrayList<>();
        for (Epic epic: epics) {
            epicDtos.add(getEpicDto(epic));
        }
        return epicDtos;
    }

    @Override
    public EpicDto getSingleEpic(Long id) {
        Epic epic = epicDao.getSingleEpic(id);
        return getEpicDto(epic);
    }

    private EpicDto getEpicDto(Epic epic) {
        User assignee = userDao.getSingleUser(epic.getEpicAssigneeId());
        EpicDto epicDto = new EpicDto(
                epic.getId(), epic.getProId(), epic.getEpicName(),
                epic.getEpicDescription(), epic.getEpicSummery(),
                epic.getEpicAssigneeId(), assignee.getUserFname(),
                assignee.getUserLName(), epic.getEpicStatus(),
                epic.getEpicStartDate(), epic.getEpicEndDate(),
                epic.getEpicCreatedDate(), epic.getEpicUpdatedDate()
        );
        return epicDto;
    }

    @Override
    public void updateEpic(Long id, EpicDto epicDto) {
        Epic existingEpic = epicDao.getSingleEpic(id);

        existingEpic.setEpicName(epicDto.getEpicName());
        existingEpic.setEpicDescription(epicDto.getEpicDescription());
        existingEpic.setEpicSummery(epicDto.getEpicSummery());
        existingEpic.setEpicAssigneeId(epicDto.getEpicAssigneeId());
        existingEpic.setEpicStatus(epicDto.getEpicStatus());
        existingEpic.setEpicStartDate(epicDto.getEpicStartDate());
        existingEpic.setEpicEndDate(epicDto.getEpicEndDate());
        existingEpic.setEpicUpdatedDate(epicDto.getEpicUpdatedDate());

        epicDao.save(existingEpic);
    }

    @Override
    public void deleteEpic(Long id) {
        epicDao.deleteSingleEpic(id);
    }
}
