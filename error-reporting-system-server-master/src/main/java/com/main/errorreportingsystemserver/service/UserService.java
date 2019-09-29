package com.main.errorreportingsystemserver.service;

import com.main.errorreportingsystemserver.model.User;
import com.main.errorreportingsystemserver.model.dto.UserDto;

import java.util.List;

public interface UserService {
    void createUser(UserDto userDto);

    User findOne(String username);

    List<UserDto> getAllUsers();

    UserDto getSingleUser(Long id);

    void updateUser(Long id, UserDto userDetails);

    void deleteUser(Long id);
}
