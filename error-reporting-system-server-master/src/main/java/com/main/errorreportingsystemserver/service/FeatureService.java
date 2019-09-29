package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.dto.EpicDto;
import com.main.errorreportingsystemserver.model.dto.FeatureDto;

import java.util.List;

public interface FeatureService {
    void createFeature(FeatureDto featureDto);

    List<FeatureDto> getAllFeatures();

    FeatureDto getSingleFeature(Long id);

    void updateFeature(Long id, FeatureDto featureDto);

    void deleteFeature(Long id);
}
