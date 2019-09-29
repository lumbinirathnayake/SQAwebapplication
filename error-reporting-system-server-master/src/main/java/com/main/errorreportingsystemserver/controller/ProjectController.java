package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.dto.ProjectDto;
import com.main.errorreportingsystemserver.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("/")
    public ResponseEntity<?> createProject(@RequestBody ProjectDto projectDto) {
        projectService.createProject(projectDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<ProjectDto>> getAllProjects() {
        List<ProjectDto> projectDtoList = projectService.getAllProjects();
        if (projectDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(projectDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProjectById(@PathVariable(value = "id") Long userId) {
        ProjectDto projectDto = projectService.getSingleProject(userId);
        if (projectDto == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<ProjectDto>(projectDto, HttpStatus.OK);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateProject(@PathVariable(value = "id") Long userId, @Valid @RequestBody ProjectDto projectDetails) {
        projectService.updateProject(userId, projectDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable(value = "id") Long proId) {
        projectService.deleteProject(proId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
