package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.ProjectDto;

import java.util.List;

public interface ProjectService {
    void createProject(ProjectDto projectDto);

    List<ProjectDto> getAllProjects();

    ProjectDto getSingleProject(Long id);

    void updateProject(Long id, ProjectDto projectDto);

    void deleteProject(Long id);
}
