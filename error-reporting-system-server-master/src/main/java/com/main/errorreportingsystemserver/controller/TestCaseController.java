package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.TestCase;
import com.main.errorreportingsystemserver.model.dto.TestCaseDto;
import com.main.errorreportingsystemserver.service.TestCaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/testCase")
public class TestCaseController {
    @Autowired
    private TestCaseService testCaseService;

    @PostMapping("/")
    public ResponseEntity<?> createTestCase(@RequestBody TestCaseDto testCaseDto) {
        testCaseService.createTestCase(testCaseDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<TestCaseDto>> getAllTestCases() {
        List<TestCaseDto> epicDtoList = testCaseService.getAllTestCases();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<TestCaseDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTestCaseById(@PathVariable(value = "id") Long testCaseId) {
        TestCaseDto testCase = testCaseService.getSingleTestCase(testCaseId);
        if (testCase == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<TestCaseDto>(testCase, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTestCase(@PathVariable(value = "id") Long testCaseId, @Valid @RequestBody TestCaseDto testCaseDto) {
        testCaseService.updateTestCase(testCaseId, testCaseDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTestCase(@PathVariable(value = "id") Long testCaseId) {
        testCaseService.deleteTestCase(testCaseId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
