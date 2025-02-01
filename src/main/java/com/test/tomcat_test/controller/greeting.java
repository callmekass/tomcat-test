package com.test.tomcat_test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/greeting") 
public class greeting {
  
  @GetMapping("/get")
  public String greeting() {
    return "Hello, World!";
  }
}
