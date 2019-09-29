package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.dto.SprintDto;
import com.main.errorreportingsystemserver.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/sprint")
public class SprintController {
    @Autowired
    private SprintService sprintService;

    @PostMapping("/")
    public ResponseEntity<?> createSprint(@RequestBody SprintDto sprintDto) {
        sprintService.createSprint(sprintDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<SprintDto>> getAllSprints() {
        List<SprintDto> epicDtoList = sprintService.getAllSprint();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<SprintDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSprintById(@PathVariable(value = "id") Long sprintId) {
        SprintDto sprint = sprintService.getSingleSprint(sprintId);
        if (sprint == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<SprintDto>(sprint, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateSprint(@PathVariable(value = "id") Long sprintId, @Valid @RequestBody SprintDto sprintDetails) {
        sprintService.updateSprint(sprintId, sprintDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSprint(@PathVariable(value = "id") Long sprintId) {
        sprintService.deleteSprint(sprintId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
