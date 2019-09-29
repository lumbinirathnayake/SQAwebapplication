package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Projects;
import com.main.errorreportingsystemserver.model.other.ProjectUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
public interface ProjectUserDao extends JpaRepository<ProjectUsers, Long> {
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM project_users WHERE project_users.user_id = :id", nativeQuery = true)
    void deleteUserFromProjectUsers(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM project_users WHERE project_users.pro_id = :id", nativeQuery = true)
    void deleteProjectFromProjectUsers(Long id);

}
