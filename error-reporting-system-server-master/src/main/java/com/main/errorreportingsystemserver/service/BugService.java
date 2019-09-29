package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.BugDto;

import java.util.List;

public interface BugService {
    void createBug(BugDto bugDto);

    List<BugDto> getAllBugs();

    BugDto getSingleBug(Long id);

    void updateBug(Long id, BugDto bugDto);

    void deleteBug(Long id);
}
