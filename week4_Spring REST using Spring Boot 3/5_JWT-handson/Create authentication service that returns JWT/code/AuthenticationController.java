package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping("/authenticate")
    public @ResponseBody String authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Basic")) {
            String base64Credentials = authHeader.substring("Basic".length()).trim();
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            String[] values = credentials.split(":", 2);
            String username = values[0];
            String password = values[1];

            // (Optional) You can validate the username and password from DB here
            if (username.equals("user") && password.equals("pwd")) {
                String token = jwtUtil.generateToken(username);
                return "{\"token\": \"" + token + "\"}";
            }
        }
        return "Invalid Credentials";
    }
}
