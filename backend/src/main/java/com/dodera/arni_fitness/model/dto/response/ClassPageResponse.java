package com.dodera.arni_fitness.model.dto.response;

import com.dodera.arni_fitness.model.dto.details.ClassDetails;
import com.dodera.arni_fitness.model.Coach;

import java.util.List;

public record ClassPageResponse(List<Coach> coaches, List<ClassDetails> classes) {
}
