package com.anothernails.backend.controller;

import com.anothernails.backend.dto.GenerateDesignRequest;
import com.anothernails.backend.dto.GenerateDesignResponse;
import com.anothernails.backend.service.DesignGenerationService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/designs")
@CrossOrigin(originPatterns = "http://localhost:*")
public class DesignController {

    private final DesignGenerationService designGenerationService;

    public DesignController(
            DesignGenerationService designGenerationService) {
        this.designGenerationService = designGenerationService;
    }

    @PostMapping("/generate")
    public GenerateDesignResponse generate(
            @RequestBody GenerateDesignRequest request) {

        List<String> prompts =
                designGenerationService.generatePrompts(request);

        return new GenerateDesignResponse(
                "Design received successfully",
                prompts
        );
    }
}