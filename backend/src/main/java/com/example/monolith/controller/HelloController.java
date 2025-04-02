package com.example.monolith.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello(Model model) {
        model.addAttribute("mensaje", "¡Hola desde Spring Boot con JSP!");
        return "hello";  // Se refiere a hello.jsp dentro de /WEB-INF/views/
    }
}