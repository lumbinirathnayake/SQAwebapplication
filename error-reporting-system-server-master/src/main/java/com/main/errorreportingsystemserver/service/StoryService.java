package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.Story;
import com.main.errorreportingsystemserver.model.dto.StoryDto;

import java.util.List;

public interface StoryService {
    void createStory(StoryDto epicDto);

    List<StoryDto> getAllStories();

    StoryDto getSingleStory(Long id);

    void updateStory(Long id, StoryDto epicDto);

    void deleteStory(Long id);
}
