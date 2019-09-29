package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.EpicDto;
import com.main.errorreportingsystemserver.model.dto.SprintDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SprintService {
    void createSprint(SprintDto sprintDto);

    List<SprintDto> getAllSprint();

    SprintDto getSingleSprint(Long id);

    void updateSprint(Long id, SprintDto sprintDto);

    void deleteSprint(Long id);
}
