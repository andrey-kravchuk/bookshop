package com.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/users")
public class UserController {

  @RequestMapping(value = "/test", method = RequestMethod.GET)
  public ModelAndView getWelcomePage(){
    ModelAndView modelAndView = new ModelAndView("usersPage");
    return modelAndView;
  }

}
