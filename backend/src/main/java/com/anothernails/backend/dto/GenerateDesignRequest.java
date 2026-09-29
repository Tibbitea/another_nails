package com.anothernails.backend.dto;

import java.util.List;

public class GenerateDesignRequest {

    private String length;
    private String shape;

    private List<String> styles;
    private List<String> effects;
    private List<String> themes;

    private String colorMode;
    private List<String> colors;
    private List<String> colorPalettes;

    private List<String> avoid;
    private String avoidNotes;

    private Integer complexity;

    public String getLength() {
        return length;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    public List<String> getStyles() {
        return styles;
    }

    public void setStyles(List<String> styles) {
        this.styles = styles;
    }

    public List<String> getEffects() {
        return effects;
    }

    public void setEffects(List<String> effects) {
        this.effects = effects;
    }

    public List<String> getThemes() {
        return themes;
    }

    public void setThemes(List<String> themes) {
        this.themes = themes;
    }

    public String getColorMode() {
        return colorMode;
    }

    public void setColorMode(String colorMode) {
        this.colorMode = colorMode;
    }

    public List<String> getColors() {
        return colors;
    }

    public void setColors(List<String> colors) {
        this.colors = colors;
    }

    public List<String> getColorPalettes() {
        return colorPalettes;
    }

    public void setColorPalettes(List<String> colorPalettes) {
        this.colorPalettes = colorPalettes;
    }

    public List<String> getAvoid() {
        return avoid;
    }

    public void setAvoid(List<String> avoid) {
        this.avoid = avoid;
    }

    public String getAvoidNotes() {
        return avoidNotes;
    }

    public void setAvoidNotes(String avoidNotes) {
        this.avoidNotes = avoidNotes;
    }

    public Integer getComplexity() {
        return complexity;
    }

    public void setComplexity(Integer complexity) {
        this.complexity = complexity;
    }
}