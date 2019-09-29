package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TaskDao extends JpaRepository<Task, Long> {
    @Query(value = "SELECT * from task where task.task_id = :id", nativeQuery = true)
    Task getSingleTask(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM task WHERE task.task_id = :id", nativeQuery = true)
    void deleteSingleTask(Long id);
}
