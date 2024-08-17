package com.dodera.arni_fitness.model.dto.request;

import java.time.LocalDateTime;

public record SessionRequest(
        String name,
    Long classId,
    Long coachId,
    LocalDateTime date,
        String observations
) { }
