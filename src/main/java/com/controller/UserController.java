package com.controller;

import com.model.User;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/users")
public class UserController {

  List<User> users = new ArrayList<>();

  @RequestMapping(value = "/test", method = RequestMethod.GET)
  public ModelAndView getWelcomePage(){
    ModelAndView modelAndView = new ModelAndView("usersPage");
    return modelAndView;
  }

  @RequestMapping(value = "/", method = RequestMethod.POST)
  public User saveUser(@RequestBody User user){
    users.add(user);
    return user;
  }

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public User fetchUser(){
    return new User("newname", "newpassword");
  }

}
