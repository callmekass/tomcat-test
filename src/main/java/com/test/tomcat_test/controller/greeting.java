package com.test.tomcat_test.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class greeting {
  
  @GetMapping("/greeting")
  public String greeting() {
    return "Hello, World!";
  }
}
