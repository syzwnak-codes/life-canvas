package com.lifecanvas.backend.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vision-board")
public class VisionBoardController {

    @GetMapping("/test")
    public String testVisionBoard(@AuthenticationPrincipal UserDetails userDetails) {
        return "Hello " + userDetails.getUsername() + ", Vision Board is accessible!";
    }
}
