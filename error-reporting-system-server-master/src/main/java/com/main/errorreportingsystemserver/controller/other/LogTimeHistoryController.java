package com.main.errorreportingsystemserver.controller.other;

import com.main.errorreportingsystemserver.model.dto.LogTimeHistoryDto;
import com.main.errorreportingsystemserver.service.LogTimeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/logTimeHistory")
public class LogTimeHistoryController {
    @Autowired
    private LogTimeHistoryService logTimeHistoryService;

    @PostMapping("/")
    public ResponseEntity<?> createLogTimeHistory(@RequestBody LogTimeHistoryDto logTimeHistoryDto) {
        logTimeHistoryService.createLogTimeHistory(logTimeHistoryDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<LogTimeHistoryDto>> getAllLogTimeHistories() {
        List<LogTimeHistoryDto> epicDtoList = logTimeHistoryService.getAllLogTimeHistories();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<LogTimeHistoryDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getLogTimeHistoryById(@PathVariable(value = "id") Long logId) {
        LogTimeHistoryDto epic = logTimeHistoryService.getSingleLogTimeHistory(logId);
        if (epic == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<LogTimeHistoryDto>(epic, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateLogTimeHistory(@PathVariable(value = "id") Long epicId, @Valid @RequestBody LogTimeHistoryDto logDetails) {
        logTimeHistoryService.updateLogTimeHistory(epicId, logDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLogTimeHistory(@PathVariable(value = "id") Long logId) {
        logTimeHistoryService.deleteLogTimeHistory(logId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
