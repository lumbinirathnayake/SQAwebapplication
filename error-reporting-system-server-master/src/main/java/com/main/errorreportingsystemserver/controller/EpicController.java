package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.dto.EpicDto;
import com.main.errorreportingsystemserver.service.EpicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/epic")
public class EpicController {
    @Autowired
    private EpicService epicService;

    @PostMapping("/")
    public ResponseEntity<?> createEpic(@RequestBody EpicDto epicDto) {
        epicService.createEpic(epicDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<EpicDto>> getAllEpics() {
        List<EpicDto> epicDtoList = epicService.getAllEpics();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<EpicDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEpicById(@PathVariable(value = "id") Long epicId) {
        EpicDto epic = epicService.getSingleEpic(epicId);
        if (epic == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<EpicDto>(epic, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEpic(@PathVariable(value = "id") Long epicId, @Valid @RequestBody EpicDto epicDetails) {
        epicService.updateEpic(epicId, epicDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEpic(@PathVariable(value = "id") Long epicId) {
        epicService.deleteEpic(epicId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
