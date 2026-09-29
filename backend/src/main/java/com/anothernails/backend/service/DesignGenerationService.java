package com.anothernails.backend.service;

import com.anothernails.backend.dto.GenerateDesignRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DesignGenerationService {

    public List<String> generatePrompts(
            GenerateDesignRequest request) {

        String base =
                "Press-on nails: "
                + request.getLength()
                + ", "
                + request.getShape();

        return List.of(
                base + " - faithful interpretation",
                base + " - elegant interpretation",
                base + " - artistic interpretation",
                base + " - bold interpretation"
        );
    }
}