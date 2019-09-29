package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Bugs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface BugDao extends JpaRepository<Bugs, Long> {
    @Query(value = "SELECT * from bugs where bugs.bug_id = :id", nativeQuery = true)
    Bugs getSingleBug(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM bugs WHERE bugs.bug_id = :id", nativeQuery = true)
    void deleteSingleBug(Long id);
}
