package com.dodera.arni_fitness.model.dto.response;

import com.dodera.arni_fitness.model.dto.details.PurchaseDetails;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class PaymentsPageResponse {
    private List<PurchaseDetails> purchases;
    private int totalPages;
    private int currentPage;
    private long totalItems;
}
