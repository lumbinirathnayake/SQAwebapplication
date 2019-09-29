package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.ProjectDao;
import com.main.errorreportingsystemserver.dao.ProjectUserDao;
import com.main.errorreportingsystemserver.dao.UserDao;
import com.main.errorreportingsystemserver.model.Projects;
import com.main.errorreportingsystemserver.model.User;
import com.main.errorreportingsystemserver.model.dto.ProjectDto;
import com.main.errorreportingsystemserver.model.other.ProjectUsers;
import com.main.errorreportingsystemserver.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private ProjectDao projectDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private ProjectUserDao projectUserDao;

    @Override
    public void createProject(ProjectDto projectDto) {
        Projects newProject = new Projects(
                projectDto.getProName(), projectDto.getProType(),
                projectDto.getProDescription(), projectDto.getProCreatorId(),
                projectDto.getProLeadId(), projectDto.getProStartedDate(),
                projectDto.getProEndDate(), projectDto.getProCreatedDate(),
                projectDto.getProUpdatedDate()
        );
        Projects savedProject = projectDao.save(newProject);

        if (projectDto.getProUsers() != null) {
            if (projectDto.getProUsers().size() != 0) {
                for (User user : projectDto.getProUsers())
                    projectUserDao.save(new ProjectUsers(user.getId(), savedProject.getId()));
            }
        }
    }

    @Override
    public List<ProjectDto> getAllProjects() {
        List<ProjectDto> projectDtoList = new ArrayList<>();

        List<Projects> projects = projectDao.findAll();
        for (Projects project: projects) {
            projectDtoList.add(getProjectDto(project));
        }

        return projectDtoList;
    }

    @Override
    public ProjectDto getSingleProject(Long id) {
        Projects project = projectDao.getSingleProject(id);
        return getProjectDto(project);
    }

    private ProjectDto getProjectDto(Projects project) {
        User creator = userDao.getSingleUser(project.getProCreatorId());
        User lead = userDao.getSingleUser(project.getProLeadId());
        Set<User> proUsers = userDao.getProUsers(project.getId());

        ProjectDto projectDto = new ProjectDto(
                project.getProName(), project.getProType(),
                project.getProDescription(), creator.getId(),
                creator.getUserFname(), creator.getUserLName(),
                lead.getId(), lead.getUserFname(), lead.getUserLName(),
                project.getProStartedDate(), project.getProEndDate(),
                project.getProCreatedDate(), project.getProUpdatedDate(), proUsers
        );

        projectDto.setId(project.getId());
        return projectDto;
    }

    @Override
    public void updateProject(Long id, ProjectDto projectDto) {
        Projects existingProject = projectDao.getSingleProject(id);

        existingProject.setProName(projectDto.getProName());
        existingProject.setProType(projectDto.getProType());
        existingProject.setProDescription(projectDto.getProDescription());
        existingProject.setProCreatorId(projectDto.getProCreatorId());
        existingProject.setProLeadId(projectDto.getProLeadId());
        existingProject.setProStartedDate(projectDto.getProStartedDate());
        existingProject.setProEndDate(projectDto.getProEndDate());
        existingProject.setProCreatedDate(projectDto.getProCreatedDate());
        existingProject.setProUpdatedDate(projectDto.getProUpdatedDate());

        projectDao.save(existingProject);
    }

    @Override
    public void deleteProject(Long id) {
        projectDao.deleteSingleProject(id);
        projectUserDao.deleteProjectFromProjectUsers(id);
    }
}
