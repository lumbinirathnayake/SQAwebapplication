package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.TaskDto;

import java.util.List;

public interface TaskService {
    void createTask(TaskDto taskDto);

    List<TaskDto> getAllTasks();

    TaskDto getSingleTask(Long id);

    void updateTask(Long id, TaskDto taskDto);

    void deleteTask(Long id);
}
