package com.main.errorreportingsystemserver.service.Impl;

import com.main.errorreportingsystemserver.dao.FeatureDao;
import com.main.errorreportingsystemserver.dao.UserDao;
import com.main.errorreportingsystemserver.model.Features;
import com.main.errorreportingsystemserver.model.User;
import com.main.errorreportingsystemserver.model.dto.FeatureDto;
import com.main.errorreportingsystemserver.service.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FeatureServiceImpl implements FeatureService {
    @Autowired
    private FeatureDao featureDao;
    @Autowired
    private UserDao userDao;

    @Override
    public void createFeature(FeatureDto featureDto) {
        Features newFeature = new Features(
                featureDto.getFeatureEpicId(), featureDto.getFeatureProjectId(),
                featureDto.getFeatureName(), featureDto.getFeatureSummary(),
                featureDto.getFeatureDescription(), featureDto.getFeatureAssigneeId(),
                featureDto.getFeatureStatus(), featureDto.getFeatureStartDate(),
                featureDto.getFeatureEndDate(), featureDto.getFeatureCreatedDate(),
                featureDto.getFeatureUpdatedDate()
        );
        featureDao.save(newFeature);
    }

    @Override
    public List<FeatureDto> getAllFeatures() {
        List<Features> features = featureDao.findAll();
        List<FeatureDto> featureDtos = new ArrayList<>();
        for (Features feature: features) {
            featureDtos.add(getFeatureDto(feature));
        }
        return featureDtos;
    }

    private FeatureDto getFeatureDto(Features feature) {
        User assinee = userDao.getSingleUser(feature.getFeatureAssigneeId());
        FeatureDto featureDto = new FeatureDto(
                feature.getId(), feature.getFeatureEpicId(),
                feature.getFeatureProjectId(), feature.getFeatureName(),
                feature.getFeatureSummary(), feature.getFeatureDescription(),
                assinee.getId(), assinee.getUserFname(), assinee.getUserLName(),
                feature.getFeatureStatus(), feature.getFeatureStartDate(),
                feature.getFeatureEndDate(), feature.getFeatureCreatedDate(),
                feature.getFeatureUpdatedDate()
        );
        return featureDto;
    }

    @Override
    public FeatureDto getSingleFeature(Long id) {
        Features feature = featureDao.getSingleFeature(id);
        return getFeatureDto(feature);
    }

    @Override
    public void updateFeature(Long id, FeatureDto featureDto) {
        Features existingFeature = featureDao.getSingleFeature(id);

        existingFeature.setFeatureEpicId(featureDto.getFeatureEpicId());
        existingFeature.setFeatureProjectId(featureDto.getFeatureProjectId());
        existingFeature.setFeatureName(featureDto.getFeatureName());
        existingFeature.setFeatureSummary(featureDto.getFeatureSummary());
        existingFeature.setFeatureDescription(featureDto.getFeatureDescription());
        existingFeature.setFeatureAssigneeId(featureDto.getFeatureAssigneeId());
        existingFeature.setFeatureStatus(featureDto.getFeatureStatus());
        existingFeature.setFeatureStartDate(featureDto.getFeatureStartDate());
        existingFeature.setFeatureEndDate(featureDto.getFeatureEndDate());
        existingFeature.setFeatureCreatedDate(featureDto.getFeatureCreatedDate());
        existingFeature.setFeatureUpdatedDate(featureDto.getFeatureUpdatedDate());

        featureDao.save(existingFeature);
    }

    @Override
    public void deleteFeature(Long id) {
        featureDao.deleteSingleFeature(id);
    }
}
