package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.*;
import com.main.errorreportingsystemserver.model.*;
import com.main.errorreportingsystemserver.model.dto.StoryDto;
import com.main.errorreportingsystemserver.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StoryServiceImpl implements StoryService {
    @Autowired
    private StoryDao storyDao;
    @Autowired
    private EpicDao epicDao;
    @Autowired
    private FeatureDao featureDao;
    @Autowired
    private SprintDao sprintDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private ProjectDao projectDao;


    @Override
    public void createStory(StoryDto storyDto) {
        Story newStory = new Story(
                storyDto.getStoryName(), storyDto.getStoryProjectId(),
                storyDto.getStoryEpicId(), storyDto.getStoryFeatureId(),
                storyDto.getStorySprintId(), storyDto.getStorySummery(),
                storyDto.getStoryDescription(), storyDto.getStoryPoints(),
                storyDto.getStoryStartDate(), storyDto.getStoryEndDate(),
                storyDto.getStoryAssigneeId(), storyDto.getStoryReporterId(),
                storyDto.getStoryStatus(), storyDto.getStoryCreatedDate(),
                storyDto.getStoryUpdatedDate()
        );

        storyDao.save(newStory);
    }

    @Override
    public List<StoryDto> getAllStories() {
        List<Story> stories = storyDao.findAll();
        List<StoryDto> storyDtos = new ArrayList<>();
        for (Story story: stories) {
            storyDtos.add(getStoryDto(story));
        }
        return storyDtos;
    }

    private StoryDto getStoryDto(Story story) {
        Projects project = projectDao.getSingleProject(story.getStoryProjectId());
        Epic epic = epicDao.getSingleEpic(story.getStoryEpicId());
        Features feature = featureDao.getSingleFeature(story.getStoryFeatureId());
        Sprint sprint = sprintDao.getSingleSprint(story.getStorySprintId());
        User assignee = userDao.getSingleUser(story.getStoryAssigneeId());
        User reporter = userDao.getSingleUser(story.getStoryReporterId());

        StoryDto storyDto = new StoryDto(
                story.getId(), story.getStoryName(), project.getId(),
                project.getProName(), epic.getId(), epic.getEpicName(),
                feature.getId(), feature.getFeatureName(), sprint.getId(),
                sprint.getSprintName(), story.getStorySummery(), story.getStoryDescription(),
                story.getStoryPoints(), story.getStoryStartDate(), story.getStoryEndDate(),
                assignee.getId(), assignee.getUserFname(), assignee.getUserLName(),
                reporter.getId(), reporter.getUserFname(), reporter.getUserLName(),
                story.getStoryStatus(), story.getStoryCreatedDate(), story.getStoryUpdatedDate()
        );

        return storyDto;
    }

    @Override
    public StoryDto getSingleStory(Long id) {
        Story story = storyDao.getSingleStory(id);
        return getStoryDto(story);
    }

    @Override
    public void updateStory(Long id, StoryDto storyDto) {
        Story existingStory = storyDao.getSingleStory(storyDto.getId());

        existingStory.setStoryName(storyDto.getStoryName());
        existingStory.setStoryProjectId(storyDto.getStoryProjectId());
        existingStory.setStoryEpicId(storyDto.getStoryEpicId());
        existingStory.setStoryFeatureId(storyDto.getStoryFeatureId());
        existingStory.setStorySprintId(storyDto.getStorySprintId());
        existingStory.setStorySummery(storyDto.getStorySummery());
        existingStory.setStoryDescription(storyDto.getStoryDescription());
        existingStory.setStoryPoints(storyDto.getStoryPoints());
        existingStory.setStoryStartDate(storyDto.getStoryStartDate());
        existingStory.setStoryEndDate(storyDto.getStoryEndDate());
        existingStory.setStoryAssigneeId(storyDto.getStoryAssigneeId());
        existingStory.setStoryReporterId(storyDto.getStoryReporterId());
        existingStory.setStoryStatus(storyDto.getStoryStatus());
        existingStory.setStoryCreatedDate(storyDto.getStoryCreatedDate());
        existingStory.setStoryUpdatedDate(storyDto.getStoryUpdatedDate());

        storyDao.save(existingStory);
    }

    @Override
    public void deleteStory(Long id) {
        storyDao.deleteSingleStory(id);
    }
}
