package com.main.errorreportingsystemserver.model.other;

import javax.persistence.*;

@Entity
@Table(name = "project_users")
public class ProjectUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "pro_id")
    private Long proId;

    public ProjectUsers() {
    }

    public ProjectUsers(Long userId, Long proId) {
        this.userId = userId;
        this.proId = proId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProId() {
        return proId;
    }

    public void setProId(Long proId) {
        this.proId = proId;
    }
}
