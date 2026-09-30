package com.anothernails.backend.service;

import com.anothernails.backend.dto.GenerateDesignRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignGenerationService {

    private final NailPromptBuilder nailPromptBuilder;

    public DesignGenerationService(
            NailPromptBuilder nailPromptBuilder) {

        this.nailPromptBuilder = nailPromptBuilder;
    }

    public List<String> generatePrompts(
            GenerateDesignRequest request) {

        return nailPromptBuilder.buildPrompts(request);
    }
}