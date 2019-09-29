package com.main.errorreportingsystemserver.dao.other;

import com.main.errorreportingsystemserver.model.other.LogTimeHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface LogTimeHistoryDao extends JpaRepository<LogTimeHistory, Long> {
    @Query(value = "SELECT * from log_time_history e where e.time_history_id = :id", nativeQuery = true)
    LogTimeHistory getSingleLogTimeHistory(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM log_time_history WHERE log_time_history.task_id = :id", nativeQuery = true)
    void deleteSingleLogTimeHistoryByTaskId(Long id);
}
