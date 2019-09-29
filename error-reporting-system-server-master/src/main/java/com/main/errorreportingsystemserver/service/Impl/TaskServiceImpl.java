package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.*;
import com.main.errorreportingsystemserver.dao.other.LogTimeHistoryDao;
import com.main.errorreportingsystemserver.model.*;
import com.main.errorreportingsystemserver.model.dto.TaskDto;
import com.main.errorreportingsystemserver.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskDao taskDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private ProjectDao projectDao;
    @Autowired
    private StoryDao storyDao;
    @Autowired
    private FeatureDao featureDao;
    @Autowired
    private SprintDao sprintDao;
    @Autowired
    private LogTimeHistoryDao logTimeHistoryDao;

    @Override
    public void createTask(TaskDto taskDto) {
        Task task = new Task(
                taskDto.getTaskName(), taskDto.getTaskProjectId(),
                taskDto.getTaskStoryId(), taskDto.getTaskFeatureId(),
                taskDto.getTaskSprintId(), taskDto.getTaskSummery(),
                taskDto.getTaskDescription(), taskDto.getTaskStartDate(),
                taskDto.getTaskEndDate(), taskDto.getTaskAssigneeId(), taskDto.getTaskCreattorId(),
                taskDto.getTaskStatus(), taskDto.getTaskEstimatedTime(), taskDto.getTaskLoggedTime(),
                taskDto.getTaskRemainingTime(), taskDto.getTaskCreatedDate(), taskDto.getTaskUpdatedDate()
        );

        taskDao.save(task);
    }

    @Override
    public List<TaskDto> getAllTasks() {
        List<Task> tasks = taskDao.findAll();
        List<TaskDto> taskDtos = new ArrayList<>();
        for (Task task: tasks) {
            taskDtos.add(getTaskDto(task));
        }
        return taskDtos;
    }

    private TaskDto getTaskDto(Task task) {
        Projects project = projectDao.getSingleProject(task.getTaskProjectId());
        Story story = storyDao.getSingleStory(task.getTaskStoryId());
        Features feature = featureDao.getSingleFeature(task.getTaskFeatureId());
        Sprint sprint = sprintDao.getSingleSprint(task.getTaskSprintId());
        User assignee = userDao.getSingleUser(task.getTaskAssigneeId());
        User creator = userDao.getSingleUser(task.getTaskCreatorId());

        TaskDto taskDto = new TaskDto(
                task.getId(), task.getTaskName(), project.getId(),
                story.getId(), story.getStoryName(), feature.getId(),
                feature.getFeatureName(), sprint.getId(), sprint.getSprintName(),
                task.getTaskSummery(), task.getTaskDescription(), task.getTaskStartDate(),
                task.getTaskEndDate(), assignee.getId(), assignee.getUserFname(), assignee.getUserLName(),
                creator.getId(), creator.getUserFname(), creator.getUserLName(), task.getTaskStatus(),
                task.getTaskEstimatedTime(), task.getTaskLoggedTime(), task.getTaskRemainingTime(),
                task.getTaskCreatedDate(), task.getTaskUpdatedDate()
        );
        return taskDto;
    }

    @Override
    public TaskDto getSingleTask(Long id) {
        Task task = taskDao.getSingleTask(id);
        return getTaskDto(task);
    }

    @Override
    public void updateTask(Long id, TaskDto taskDto) {
        Task existingTask = taskDao.getSingleTask(id);

        existingTask.setTaskName(taskDto.getTaskName());
        existingTask.setTaskProjectId(taskDto.getTaskProjectId());
        existingTask.setTaskStoryId(taskDto.getTaskStoryId());
        existingTask.setTaskFeatureId(taskDto.getTaskFeatureId());
        existingTask.setTaskSprintId(taskDto.getTaskSprintId());
        existingTask.setTaskSummery(taskDto.getTaskSummery());
        existingTask.setTaskDescription(taskDto.getTaskDescription());
        existingTask.setTaskStartDate(taskDto.getTaskStartDate());
        existingTask.setTaskEndDate(taskDto.getTaskEndDate());
        existingTask.setTaskAssigneeId(taskDto.getTaskAssigneeId());
        existingTask.setTaskCreatorId(taskDto.getTaskCreattorId());
        existingTask.setTaskStatus(taskDto.getTaskStatus());
        existingTask.setTaskEstimatedTime(taskDto.getTaskEstimatedTime());
        existingTask.setTaskLoggedTime(taskDto.getTaskLoggedTime());
        existingTask.setTaskRemainingTime(taskDto.getTaskRemainingTime());
        existingTask.setTaskCreatedDate(taskDto.getTaskCreatedDate());
        existingTask.setTaskUpdatedDate(taskDto.getTaskUpdatedDate());

        taskDao.save(existingTask);
    }

    @Override
    public void deleteTask(Long id) {
        taskDao.deleteSingleTask(id);
        logTimeHistoryDao.deleteSingleLogTimeHistoryByTaskId(id);
    }
}
