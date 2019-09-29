package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.EpicDto;

import java.util.List;

public interface EpicService {
    void createEpic(EpicDto epicDto);

    List<EpicDto> getAllEpics();

    EpicDto getSingleEpic(Long id);

    void updateEpic(Long id, EpicDto epicDto);

    void deleteEpic(Long id);
}
