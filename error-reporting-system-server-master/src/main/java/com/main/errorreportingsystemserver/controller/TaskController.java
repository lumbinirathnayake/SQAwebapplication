package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.dto.TaskDto;
import com.main.errorreportingsystemserver.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/")
    public ResponseEntity<?> createTask(@RequestBody TaskDto taskDto) {
        taskService.createTask(taskDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<TaskDto>> getAllTasks() {
        List<TaskDto> taskDtoList = taskService.getAllTasks();
        if (taskDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<TaskDto>>(taskDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(@PathVariable(value = "id") Long taskId) {
        TaskDto task = taskService.getSingleTask(taskId);
        if (task == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<TaskDto>(task, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTask(@PathVariable(value = "id") Long taskId, @Valid @RequestBody TaskDto taskDetails) {
        taskService.updateTask(taskId, taskDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable(value = "id") Long taskId) {
        taskService.deleteTask(taskId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
