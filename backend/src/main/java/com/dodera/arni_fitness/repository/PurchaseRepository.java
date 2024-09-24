package com.dodera.arni_fitness.repository;

import com.dodera.arni_fitness.model.Purchase;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase, Long>{
    Optional<Purchase> findByStripeCheckoutSessionId(String stripeCheckoutSessionId);
    Page<Purchase> findAllByUserId(Long userId, Pageable pageable);
}
