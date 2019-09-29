package com.main.errorreportingsystemserver.dao;

import com.main.errorreportingsystemserver.model.Features;
import com.main.errorreportingsystemserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface FeatureDao extends JpaRepository<Features, Long> {
    @Query(value = "SELECT * from feature where feature.feature_id = :id", nativeQuery = true)
    Features getSingleFeature(Long id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM feature WHERE feature.feature_id = :id", nativeQuery = true)
    void deleteSingleFeature(Long id);
}
