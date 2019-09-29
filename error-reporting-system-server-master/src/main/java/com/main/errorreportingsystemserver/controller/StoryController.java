package com.main.errorreportingsystemserver.controller;

import com.main.errorreportingsystemserver.model.dto.StoryDto;
import com.main.errorreportingsystemserver.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/story")
public class StoryController {
    @Autowired
    private StoryService storyService;

    @PostMapping("/")
    public ResponseEntity<?> createEpic(@RequestBody StoryDto storyDto) {
        storyService.createStory(storyDto);
        return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<StoryDto>> getAllEpics() {
        List<StoryDto> epicDtoList = storyService.getAllStories();
        if (epicDtoList.isEmpty())
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<List<StoryDto>>(epicDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEpicById(@PathVariable(value = "id") Long storyId) {
        StoryDto storyDto = storyService.getSingleStory(storyId);
        if (storyDto == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<StoryDto>(storyDto, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateEpic(@PathVariable(value = "id") Long storyId, @Valid @RequestBody StoryDto storyDetails) {
        storyService.updateStory(storyId, storyDetails);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEpic(@PathVariable(value = "id") Long storyId) {
        storyService.deleteStory(storyId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
