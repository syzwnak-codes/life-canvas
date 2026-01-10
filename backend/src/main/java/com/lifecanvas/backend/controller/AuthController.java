package com.lifecanvas.backend.controller;

import com.lifecanvas.backend.dto.*;
import com.lifecanvas.backend.model.User;
import com.lifecanvas.backend.repository.UserRepository;
import com.lifecanvas.backend.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // for testing
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtils jwtUtils;

    // REGISTER endpoint
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest request) {
        if(userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        String encodedPassword = passwordEncoder.encode(request.getPassword());
        User user = new User(request.getName(), request.getEmail(), encodedPassword);
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }

    // LOGIN endpoint
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElse(null);

        if(user == null || !passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Invalid email or password!");
        }

        String token = jwtUtils.generateJwtToken(user.getEmail());

        return ResponseEntity.ok(new LoginResponse(token, user.getEmail(), user.getName()));
    }
}
