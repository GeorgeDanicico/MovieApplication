package com.dodera.arni_fitness.model.dto;

public record SignUpRequest(
    String name,
    String email,
    String password,
    String phoneNumber
) { }
