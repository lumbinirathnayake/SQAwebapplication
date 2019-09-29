package com.main.errorreportingsystemserver.controller.other;

import com.main.errorreportingsystemserver.model.dto.TestCaseFeatureGroupDto;
import com.main.errorreportingsystemserver.service.TestCaseFeatureGroupsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/testCaseFeatureGroups")
public class TestCaseFeatureGroupsController {
    @Autowired
    private TestCaseFeatureGroupsService groupService;

    @PostMapping("/")
    public ResponseEntity<?> createEpic(@RequestBody TestCaseFeatureGroupDto groupDto) {
        groupService.createTestCaseFeatureGroup(groupDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<TestCaseFeatureGroupDto>> getAllEpics() {
        List<TestCaseFeatureGroupDto> epicDtoList = groupService.getAllTestCaseFeatureGroups();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<TestCaseFeatureGroupDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEpicById(@PathVariable(value = "id") Long epicId) {
        TestCaseFeatureGroupDto epic = groupService.getSingleTestCaseFeatureGroup(epicId);
        if (epic == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<TestCaseFeatureGroupDto>(epic, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEpic(@PathVariable(value = "id") Long epicId, @Valid @RequestBody TestCaseFeatureGroupDto groupDetails) {
        groupService.updateTestCaseFeatureGroup(epicId, groupDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEpic(@PathVariable(value = "id") Long id) {
        groupService.deleteTestCaseFeatureGroup(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
