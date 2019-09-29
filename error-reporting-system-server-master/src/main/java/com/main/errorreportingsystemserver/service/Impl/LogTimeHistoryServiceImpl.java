package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.UserDao;
import com.main.errorreportingsystemserver.dao.other.LogTimeHistoryDao;
import com.main.errorreportingsystemserver.model.dto.LogTimeHistoryDto;
import com.main.errorreportingsystemserver.model.other.LogTimeHistory;
import com.main.errorreportingsystemserver.service.LogTimeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LogTimeHistoryServiceImpl implements LogTimeHistoryService {
    @Autowired
    private LogTimeHistoryDao logTimeHistoryDao;
    @Autowired
    private UserDao userDao;

    @Override
    public void createLogTimeHistory(LogTimeHistoryDto logTimeHistoryDto) {
        LogTimeHistory logTimeHistory = new LogTimeHistory(
                logTimeHistoryDto.getTaskId(),
                logTimeHistoryDto.getDate(),
                logTimeHistoryDto.getLoggedHours()
        );
        logTimeHistoryDao.save(logTimeHistory);
    }

    @Override
    public List<LogTimeHistoryDto> getAllLogTimeHistories() {
        List<LogTimeHistory> logTimeHistories = logTimeHistoryDao.findAll();
        List<LogTimeHistoryDto> logTimeHistoryDtos = new ArrayList<>();
        for (LogTimeHistory logTimeHistory: logTimeHistories) {
            logTimeHistoryDtos.add(getLogTimeHitoryDto(logTimeHistory));
        }
        return logTimeHistoryDtos;
    }

    private LogTimeHistoryDto getLogTimeHitoryDto(LogTimeHistory logTimeHistory) {
        LogTimeHistoryDto logTimeHistoryDto = new LogTimeHistoryDto(
                logTimeHistory.getId(), logTimeHistory.getTaskId(),
                logTimeHistory.getDate(), logTimeHistory.getLoggedHours()
        );
        return logTimeHistoryDto;
    }

    @Override
    public LogTimeHistoryDto getSingleLogTimeHistory(Long id) {
        LogTimeHistory logTimeHistory = logTimeHistoryDao.getSingleLogTimeHistory(id);
        return getLogTimeHitoryDto(logTimeHistory);
    }

    @Override
    public void updateLogTimeHistory(Long id, LogTimeHistoryDto logDto) {
        LogTimeHistory exisitingLog = logTimeHistoryDao.getSingleLogTimeHistory(id);

        exisitingLog.setTaskId(logDto.getTaskId());
        exisitingLog.setDate(logDto.getDate());
        exisitingLog.setLoggedHours(logDto.getLoggedHours());

        logTimeHistoryDao.save(exisitingLog);
    }

    @Override
    public void deleteLogTimeHistory(Long taskId) {
        logTimeHistoryDao.deleteSingleLogTimeHistoryByTaskId(taskId);
    }
}
