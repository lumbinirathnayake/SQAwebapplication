package com.main.errorreportingsystemserver.controller;


import com.main.errorreportingsystemserver.model.dto.UserDto;
import com.main.errorreportingsystemserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;

	//Create User
	@PostMapping("/")
	public ResponseEntity<?> createUser(@RequestBody UserDto userDto) {
		userService.createUser(userDto);
		return new ResponseEntity<>(new HttpHeaders(), HttpStatus.CREATED);
	}

	@GetMapping("/")
	public ResponseEntity<List<UserDto>> getAllUsers() {
		List<UserDto> userDtoList = userService.getAllUsers();
		if (userDtoList.isEmpty())
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<UserDto>>(userDtoList, HttpStatus.OK);
	}

	// Get a Single user
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable(value = "id") Long userId) {
		UserDto user = userService.getSingleUser(userId);
		if (user == null) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<UserDto>(user, HttpStatus.OK);
	}

	// Update a user
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody UserDto userDetails) {
		userService.updateUser(userId, userDetails);
	    return new ResponseEntity<>(HttpStatus.OK);
	}

	// Delete a user
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable(value = "id") Long userId) {
		userService.deleteUser(userId);
	    return new ResponseEntity<>(HttpStatus.OK);
	}

}