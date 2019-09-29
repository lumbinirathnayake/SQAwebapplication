package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Epic;
import com.main.errorreportingsystemserver.model.Sprint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface SprintDao extends JpaRepository<Sprint, Long> {
    @Query(value = "SELECT * from sprint where sprint.sprint_id = :id", nativeQuery = true)
    Sprint getSingleSprint(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM sprint WHERE sprint.sprint_id = :id", nativeQuery = true)
    void deleteSingleSprint(Long id);
}
