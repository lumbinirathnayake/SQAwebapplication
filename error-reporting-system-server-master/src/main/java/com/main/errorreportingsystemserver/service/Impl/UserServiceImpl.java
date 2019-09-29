package com.main.errorreportingsystemserver.service.Impl;


import com.main.errorreportingsystemserver.dao.ProjectDao;
import com.main.errorreportingsystemserver.dao.ProjectUserDao;
import com.main.errorreportingsystemserver.dao.UserDao;
import com.main.errorreportingsystemserver.model.Projects;
import com.main.errorreportingsystemserver.model.User;
import com.main.errorreportingsystemserver.model.dto.UserDto;
import com.main.errorreportingsystemserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;
    @Autowired
    private ProjectDao projectDao;
    @Autowired
    private ProjectUserDao projectUserDao;

    @Override
    public void createUser(UserDto userDto) {
        User newUser = new User(
                userDto.getUserEnmpId(), userDto.getUserFname(),
                userDto.getUserLName(), userDto.getUserType(),
                userDto.getUserAddress(), userDto.getUserUsername(),
                userDto.getUserPassword(), userDto.getUserEMail(),
                userDto.getUserCreatedDate(), userDto.getUserUpdatedDate()
        );
        userDao.save(newUser);
    }

    @Override
    public User findOne(String username) {
        return userDao.findByUsername(username);
    }


    @Override
    public List<UserDto> getAllUsers() {
        List<User> userList = userDao.findAll();

        List<UserDto> userDtos = new ArrayList<>();
        for (User user : userList) {
            Set<Projects> userPros = projectDao.getUserProjects(user.getId());
            UserDto userDto = new UserDto( user.getId(),
                    user.getUserEnmpId(), user.getUserFname(),
                    user.getUserLName(), user.getUserType(), user.getUserAddress(),
                    user.getUserUsername(), user.getUserPassword(), user.getUserEMail(),
                    null, user.getUserCreatedDate(), user.getUserUpdatedDate(), userPros
            );
            userDtos.add(userDto);
        }
        return userDtos;
    }

    @Override
    public UserDto getSingleUser(Long id) {
        User user = userDao.getSingleUser(id);
        Set<Projects> userPros = projectDao.getUserProjects(user.getId());
        UserDto userDto = new UserDto( user.getId(),
                user.getUserEnmpId(), user.getUserFname(),
                user.getUserLName(), user.getUserType(), user.getUserAddress(),
                user.getUserUsername(), user.getUserPassword(), user.getUserEMail(),
                null, user.getUserCreatedDate(), user.getUserUpdatedDate(),
                userPros
        );
        return userDto;
    }

    @Override
    public void updateUser(Long id, UserDto userDetails) {
        User existingUser = userDao.getSingleUser(id);

        existingUser.setUserEnmpId(userDetails.getUserEnmpId());
        existingUser.setUserFname(userDetails.getUserFname());
        existingUser.setUserLName(userDetails.getUserLName());
        existingUser.setUserType(userDetails.getUserType());
        existingUser.setUserAddress(userDetails.getUserAddress());
        existingUser.setUserUsername(userDetails.getUserUsername());
        existingUser.setUserPassword(userDetails.getUserPassword());
        existingUser.setUserEMail(userDetails.getUserEMail());
        existingUser.setUserCreatedDate(userDetails.getUserCreatedDate());
        existingUser.setUserUpdatedDate(userDetails.getUserUpdatedDate());

        userDao.save(existingUser);
    }

    @Override
    public void deleteUser(Long id) {
        userDao.deleteSingleUser(id);
        projectUserDao.deleteUserFromProjectUsers(id);
    }
}
