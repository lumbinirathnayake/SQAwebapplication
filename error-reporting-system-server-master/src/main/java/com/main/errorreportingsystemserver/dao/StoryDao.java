package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Story;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface StoryDao extends JpaRepository<Story, Long> {
    @Query(value = "SELECT * from story where story.story_id = :id", nativeQuery = true)
    Story getSingleStory(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM story WHERE story.story_id = :id", nativeQuery = true)
    void deleteSingleStory(Long id);
}
