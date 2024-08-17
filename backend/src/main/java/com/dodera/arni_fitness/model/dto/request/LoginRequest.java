package com.dodera.arni_fitness.model.dto.request;

public record LoginRequest(
    String email,
    String password
) {
}
