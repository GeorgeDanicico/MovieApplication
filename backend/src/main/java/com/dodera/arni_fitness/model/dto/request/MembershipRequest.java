package com.dodera.arni_fitness.model.dto.request;

public record MembershipRequest(
        String title,
        String description,
        int price,
        int entries,
        int availability
) {
}
