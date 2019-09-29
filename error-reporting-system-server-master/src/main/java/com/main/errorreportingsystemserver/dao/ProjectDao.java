package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Projects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
public interface ProjectDao extends JpaRepository<Projects, Long> {
    @Query(value = "SELECT p.* from projects p INNER join project_users pu on pu.pro_id = p.pro_id where pu.user_id = :id", nativeQuery = true)
    Set<Projects> getUserProjects(@Param("id") Long id);

    @Query(value = "SELECT * from projects where projects.pro_id = :id", nativeQuery = true)
    Projects getSingleProject(@Param("id") Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM projects WHERE projects.pro_id = :id", nativeQuery = true)
    void deleteSingleProject(Long id);

}
