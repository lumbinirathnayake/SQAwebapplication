package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.LogTimeHistoryDto;
import com.main.errorreportingsystemserver.model.other.LogTimeHistory;

import java.util.List;

public interface LogTimeHistoryService {
    void createLogTimeHistory(LogTimeHistoryDto logTimeHistoryDto);

    List<LogTimeHistoryDto> getAllLogTimeHistories();

    LogTimeHistoryDto getSingleLogTimeHistory(Long id);

    void updateLogTimeHistory(Long id, LogTimeHistoryDto epicDto);

    void deleteLogTimeHistory(Long id);
}
