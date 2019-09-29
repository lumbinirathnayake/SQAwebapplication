package com.main.errorreportingsystemserver.model;

import javax.persistence.*;

@Entity
@Table(name = "projects")
public class Projects {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pro_id")
    private Long id;

    @Column(name = "pro_name", nullable = true)
    private String proName;

    @Column(name = "pro_type", nullable = true)
    private String proType;

    @Column(name = "pro_description", nullable = true)
    private String proDescription;

    @Column(name = "pro_creator_id", nullable = true)
    private Long proCreatorId;

    @Column(name = "pro_lead_id", nullable = true)
    private Long proLeadId;

    @Column(name = "pro_started_date", nullable = true)
    private String proStartedDate;

    @Column(name = "pro_end_date", nullable = true)
    private String proEndDate;

    @Column(name = "pro_created_date", nullable = true)
    private String proCreatedDate;

    @Column(name = "pro_updated_date", nullable = true)
    private String proUpdatedDate;

    public Projects() {
    }

    public Projects(String proName, String proType, String proDescription, Long proCreatorId, Long proLeadId, String proStartedDate, String proEndDate, String proCreatedDate, String proUpdatedDate) {
        this.proName = proName;
        this.proType = proType;
        this.proDescription = proDescription;
        this.proCreatorId = proCreatorId;
        this.proLeadId = proLeadId;
        this.proStartedDate = proStartedDate;
        this.proEndDate = proEndDate;
        this.proCreatedDate = proCreatedDate;
        this.proUpdatedDate = proUpdatedDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProName() {
        return proName;
    }

    public void setProName(String proName) {
        this.proName = proName;
    }

    public String getProType() {
        return proType;
    }

    public void setProType(String proType) {
        this.proType = proType;
    }

    public String getProDescription() {
        return proDescription;
    }

    public void setProDescription(String proDescription) {
        this.proDescription = proDescription;
    }

    public Long getProCreatorId() {
        return proCreatorId;
    }

    public void setProCreatorId(Long proCreatorId) {
        this.proCreatorId = proCreatorId;
    }

    public Long getProLeadId() {
        return proLeadId;
    }

    public void setProLeadId(Long proLeadId) {
        this.proLeadId = proLeadId;
    }

    public String getProStartedDate() {
        return proStartedDate;
    }

    public void setProStartedDate(String proStartedDate) {
        this.proStartedDate = proStartedDate;
    }

    public String getProEndDate() {
        return proEndDate;
    }

    public void setProEndDate(String proEndDate) {
        this.proEndDate = proEndDate;
    }

    public String getProCreatedDate() {
        return proCreatedDate;
    }

    public void setProCreatedDate(String proCreatedDate) {
        this.proCreatedDate = proCreatedDate;
    }

    public String getProUpdatedDate() {
        return proUpdatedDate;
    }

    public void setProUpdatedDate(String proUpdatedDate) {
        this.proUpdatedDate = proUpdatedDate;
    }
}
