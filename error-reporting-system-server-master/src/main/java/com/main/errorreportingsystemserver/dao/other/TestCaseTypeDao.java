package com.main.errorreportingsystemserver.dao.other;

import com.main.errorreportingsystemserver.model.Epic;
import com.main.errorreportingsystemserver.model.TestCase;
import com.main.errorreportingsystemserver.model.other.TestCaseType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface TestCaseTypeDao extends JpaRepository<TestCaseType, Long> {
    @Query(value = "SELECT * from test_case_type t where t.test_case_id = :id", nativeQuery = true)
    List<TestCaseType> getTestCaseTypeNameByTestCaseId(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM test_case_type WHERE test_case_type.test_case_id = :id", nativeQuery = true)
    void deleteSingleTestCaseTypeByTestCaseId(Long id);
}
