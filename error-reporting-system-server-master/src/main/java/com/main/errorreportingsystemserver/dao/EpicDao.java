package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Epic;
import com.main.errorreportingsystemserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface EpicDao extends JpaRepository<Epic, Long> {
    @Query(value = "SELECT * from epic e where e.epic_id = :id", nativeQuery = true)
    Epic getSingleEpic(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM epic WHERE epic.epic_id = :id", nativeQuery = true)
    void deleteSingleEpic(Long id);
}
