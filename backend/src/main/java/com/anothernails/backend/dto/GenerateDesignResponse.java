package com.anothernails.backend.dto;

import java.util.List;

public class GenerateDesignResponse {

    private String message;
    private List<String> prompts;

    public GenerateDesignResponse(
            String message,
            List<String> prompts) {

        this.message = message;
        this.prompts = prompts;
    }

    public String getMessage() {
        return message;
    }

    public List<String> getPrompts() {
        return prompts;
    }
}