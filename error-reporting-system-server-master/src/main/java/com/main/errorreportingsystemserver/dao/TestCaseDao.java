package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.TestCase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TestCaseDao extends JpaRepository<TestCase, Long> {
    @Query(value = "SELECT * from test_case t where t.test_case_id = :id", nativeQuery = true)
    TestCase getSingleTestCase(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM test_case WHERE test_case.test_case_id = :id", nativeQuery = true)
    void deleteSingleTestCase(Long id);
}
