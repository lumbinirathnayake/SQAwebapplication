package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
public interface UserDao extends JpaRepository <User, Long> {
    @Query(value = "SELECT u.* from users u INNER join project_users pu on pu.user_id = u.user_id where pu.pro_id = :id", nativeQuery = true)
    Set<User> getProUsers(@Param("id") Long pro_id);

    @Query(value = "SELECT * from users u where u.user_id = :id", nativeQuery = true)
    User getSingleUser(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM users WHERE users.user_id = :id", nativeQuery = true)
    void deleteSingleUser(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM user_projects WHERE user_projects.user_id = :id", nativeQuery = true)
    void deleteUserFromUserProjects(Long id);

    @Query(value = "SELECT * from users u where u.user_username = :username", nativeQuery = true)
    User findByUsername(String username);
}
