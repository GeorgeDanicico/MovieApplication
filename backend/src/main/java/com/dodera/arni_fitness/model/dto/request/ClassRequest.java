package com.dodera.arni_fitness.model.dto.request;

public record ClassRequest(
    String title,
    String description,
    int availableSpots
) { }
