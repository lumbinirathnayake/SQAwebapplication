package com.main.errorreportingsystemserver.dao.other;

import com.main.errorreportingsystemserver.model.other.TestCaseFeatureGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TestCaseFeatureGroupsDao extends JpaRepository<TestCaseFeatureGroup, Long> {
    @Query(value = "SELECT * from test_case_feature_groups e where e.group_id = :id", nativeQuery = true)
    TestCaseFeatureGroup getSingleTestCaseFeatureGroup(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM test_case_feature_groups WHERE test_case_feature_groups.feature_id = :id", nativeQuery = true)
    void deleteTestCaseFeatureGroupByFeatureId(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM test_case_feature_groups WHERE test_case_feature_groups.group_id = :id", nativeQuery = true)
    void deleteTestCaseFeatureGroup(Long id);
}
