package com.anothernails.backend.service;

import com.anothernails.backend.dto.GenerateDesignRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class NailPromptBuilder {

    private static final Map<String, String> LENGTHS = Map.of(
            "short", "short",
            "medium", "medium",
            "long", "long",
            "extra-long", "extra long"
    );

    private static final Map<String, String> SHAPES = Map.of(
            "almond", "almond",
            "square", "square",
            "coffin", "coffin",
            "oval", "oval",
            "stiletto", "stiletto"
    );

    private static final Map<String, String> STYLES = Map.ofEntries(
            Map.entry("minimal", "minimal"),
            Map.entry("kawaii", "kawaii"),
            Map.entry("grunge", "grunge"),
            Map.entry("y2k", "Y2K"),
            Map.entry("gothic", "gothic"),
            Map.entry("coquette", "coquette"),
            Map.entry("fairy", "fairy"),
            Map.entry("romantic", "romantic"),
            Map.entry("maximalist", "maximalist"),
            Map.entry("abstract", "abstract")
    );

    private static final Map<String, String> EFFECTS = Map.ofEntries(
            Map.entry("cat-eye", "cat eye magnetic effect"),
            Map.entry("chrome", "chrome"),
            Map.entry("jelly", "jelly translucent effect"),
            Map.entry("glitter", "glitter"),
            Map.entry("pearlescent", "pearlescent finish"),
            Map.entry("aura", "aura gradient"),
            Map.entry("matte", "matte finish"),
            Map.entry("3d-relief", "3D relief"),
            Map.entry("charms", "nail charms"),
            Map.entry("rhinestones", "rhinestones"),
            Map.entry("3d-flowers", "3D flowers"),
            Map.entry("hand-painted", "hand-painted details")
    );

    private static final Map<String, String> THEMES = Map.ofEntries(
            Map.entry("halloween", "Halloween"),
            Map.entry("christmas", "Christmas"),
            Map.entry("valentines", "Valentine's Day"),
            Map.entry("summer", "summer"),
            Map.entry("spring", "spring"),
            Map.entry("autumn", "autumn"),
            Map.entry("winter", "winter"),
            Map.entry("ocean", "ocean"),
            Map.entry("flowers", "flowers"),
            Map.entry("forest", "forest"),
            Map.entry("butterflies", "butterflies"),
            Map.entry("stars", "stars"),
            Map.entry("moon", "moon"),
            Map.entry("tarot", "tarot"),
            Map.entry("mermaid", "mermaid"),
            Map.entry("fairy", "fairies"),
            Map.entry("anime", "anime"),
            Map.entry("gaming", "gaming"),
            Map.entry("music", "music"),
            Map.entry("zodiac", "zodiac"),
            Map.entry("vintage", "vintage"),
            Map.entry("baroque", "baroque")
    );

    private static final Map<String, String> PALETTES = Map.ofEntries(
            Map.entry("pastel", "pastel colors"),
            Map.entry("dark", "dark colors"),
            Map.entry("earthy", "earth tones"),
            Map.entry("neutral", "neutral colors"),
            Map.entry("warm", "warm colors"),
            Map.entry("cool", "cool colors"),
            Map.entry("pink", "pink color palette"),
            Map.entry("blue", "blue color palette"),
            Map.entry("green", "green color palette"),
            Map.entry("purple", "purple color palette"),
            Map.entry("red", "red color palette"),
            Map.entry("sunset", "sunset palette"),
            Map.entry("ocean", "ocean palette"),
            Map.entry("autumn", "autumn palette"),
            Map.entry("candy", "candy color palette"),
            Map.entry("metallic", "metallic tones")
    );

    public List<String> buildPrompts(
            GenerateDesignRequest request) {

        String basePrompt = buildBasePrompt(request);

        return List.of(
                basePrompt + """

                        CREATIVE DIRECTION:
                        Follow the customer's choices very closely.
                        Prioritize coherence, wearability and a polished professional finish.
                        """,

                basePrompt + """

                        CREATIVE DIRECTION:
                        Create a more elegant and refined interpretation.
                        Keep the selected aesthetic while focusing on visual harmony.
                        """,

                basePrompt + """

                        CREATIVE DIRECTION:
                        Create a more artistic and experimental interpretation.
                        Use creative placement, asymmetry and unexpected combinations
                        while respecting all requested constraints.
                        """,

                basePrompt + """

                        CREATIVE DIRECTION:
                        Create the boldest interpretation of the requested design.
                        Make the accent nails striking and expressive while keeping
                        the complete set visually cohesive.
                        """
        );
    }

    private String buildBasePrompt(
            GenerateDesignRequest request) {

        String length = translate(
                request.getLength(),
                LENGTHS
        );

        String shape = translate(
                request.getShape(),
                SHAPES
        );

        String styles = translateList(
                request.getStyles(),
                STYLES
        );

        String effects = translateList(
                request.getEffects(),
                EFFECTS
        );

        String themes = translateList(
                request.getThemes(),
                THEMES
        );

        String colors = buildColorDescription(request);

        String avoid = buildAvoidDescription(request);

        String complexity =
                getComplexityDescription(
                        request.getComplexity()
                );

        return """
                Create a professional concept for a complete set of 10 custom press-on nails.

                NAIL SHAPE AND LENGTH:
                - Length: %s
                - Shape: %s

                AESTHETIC:
                - Styles: %s
                - Themes: %s

                EFFECTS AND TECHNIQUES:
                - %s

                COLOR DIRECTION:
                - %s

                DESIGN COMPLEXITY:
                - %s

                DESIGN REQUIREMENTS:
                - Create a cohesive set of 10 press-on nails.
                - Each nail may have a different design, but the complete set must feel visually connected.
                - Make the designs realistically achievable with professional nail art techniques.
                - Clearly show the individual nail designs.
                - Preserve the requested nail shape and length.
                - Use the selected aesthetic, themes, effects and colors as the main visual direction.

                AVOID:
                - %s

                IMAGE PRESENTATION:
                - Full set of 10 press-on nails.
                - Clean studio presentation.
                - Nails clearly separated and fully visible.
                - High detail.
                - Realistic nail art materials and textures.
                - No hands.
                - No fingers.
                - No packaging.
                """.formatted(
                length,
                shape,
                styles,
                themes,
                effects,
                colors,
                complexity,
                avoid
        );
    }

    private String buildColorDescription(
            GenerateDesignRequest request) {

        if ("individual".equals(request.getColorMode())) {
            return safeList(request.getColors())
                    .stream()
                    .reduce(
                            (a, b) -> a + ", " + b
                    )
                    .orElse("No specific colors");
        }

        if ("palette".equals(request.getColorMode())) {
            return translateList(
                    request.getColorPalettes(),
                    PALETTES
            );
        }

        return "Choose a harmonious color palette based on the selected aesthetic, themes and effects";
    }

    private String buildAvoidDescription(
            GenerateDesignRequest request) {

        String avoid = String.join(
                ", ",
                safeList(request.getAvoid())
        );

        String notes = request.getAvoidNotes();

        if (notes != null && !notes.isBlank()) {
            if (!avoid.isBlank()) {
                return avoid + ", " + notes;
            }

            return notes;
        }

        if (avoid.isBlank()) {
            return "No specific restrictions";
        }

        return avoid;
    }

    private String getComplexityDescription(
            Integer complexity) {

        if (complexity == null) {
            return "Balanced level of detail";
        }

        return switch (complexity) {
            case 1 ->
                    "Very minimal and simple, with only a few subtle details";

            case 2 ->
                    "Subtle and delicate, with restrained decorative elements";

            case 3 ->
                    "Balanced, combining simple nails with more detailed accent nails";

            case 4 ->
                    "Bold and detailed, with several decorative techniques and statement nails";

            case 5 ->
                    "Highly maximalist, elaborate and detailed, with layered decorative elements";

            default ->
                    "Balanced level of detail";
        };
    }

    private String translate(
            String value,
            Map<String, String> options) {

        if (value == null) {
            return "";
        }

        return options.getOrDefault(value, value);
    }

    private String translateList(
            List<String> values,
            Map<String, String> options) {

        return safeList(values)
                .stream()
                .map(value ->
                        options.getOrDefault(
                                value,
                                value
                        )
                )
                .reduce(
                        (a, b) -> a + ", " + b
                )
                .orElse("None");
    }

    private List<String> safeList(
            List<String> values) {

        return values != null
                ? values
                : List.of();
    }
}