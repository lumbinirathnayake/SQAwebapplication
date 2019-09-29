package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.dto.BugDto;
import com.main.errorreportingsystemserver.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/bugs")
public class BugController {
    @Autowired
    private BugService bugService;

    @PostMapping("/")
    public ResponseEntity<?> createEpic(@RequestBody BugDto bugDto) {
        bugService.createBug(bugDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<BugDto>> getAllEpics() {
        List<BugDto> epicDtoList = bugService.getAllBugs();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<BugDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEpicById(@PathVariable(value = "id") Long bugId) {
        BugDto bug = bugService.getSingleBug(bugId);
        if (bug == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<BugDto>(bug, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEpic(@PathVariable(value = "id") Long bugId, @Valid @RequestBody BugDto bugDetails) {
        bugService.updateBug(bugId, bugDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEpic(@PathVariable(value = "id") Long bugId) {
        bugService.deleteBug(bugId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
