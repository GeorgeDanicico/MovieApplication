package com.dodera.arni_fitness.model.dto.response;

import com.dodera.arni_fitness.model.dto.details.ActiveReservation;
import com.dodera.arni_fitness.model.dto.details.PurchaseDetails;
import com.dodera.arni_fitness.model.dto.details.SubscriptionDetails;
import com.dodera.arni_fitness.model.User;

import java.util.List;

public record UserDetailsResponse(
        User user,
        SubscriptionDetails subscriptionDetails,
        List<ActiveReservation> activeReservations,
        List<PurchaseDetails> purchasesDetails
) {
}
