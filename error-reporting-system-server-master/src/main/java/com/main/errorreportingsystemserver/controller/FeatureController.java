package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.dto.FeatureDto;
import com.main.errorreportingsystemserver.model.other.TestCaseFeatureGroup;
import com.main.errorreportingsystemserver.service.FeatureService;
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
@RequestMapping("/feature")
public class FeatureController {
    @Autowired
    private FeatureService featureService;
    @Autowired
    private TestCaseFeatureGroupsService groupsService;

    @PostMapping("/")
    public ResponseEntity<?> createFeature(@RequestBody FeatureDto featureDto) {
        featureService.createFeature(featureDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<FeatureDto>> getAllFeatures() {
        List<FeatureDto> epicDtoList = featureService.getAllFeatures();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<FeatureDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFeatureById(@PathVariable(value = "id") Long featureId) {
        FeatureDto featureDto = featureService.getSingleFeature(featureId);
        if (featureDto == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<FeatureDto>(featureDto, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFeature(@PathVariable(value = "id") Long featureId, @Valid @RequestBody FeatureDto featureDetails) {
        featureService.updateFeature(featureId, featureDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFeature(@PathVariable(value = "id") Long featureId) {
        featureService.deleteFeature(featureId);
        groupsService.deleteTestCaseFeatureGroupByFeatureId(featureId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
