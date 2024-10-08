package com.dodera.arni_fitness.controller;

import com.dodera.arni_fitness.model.dto.AvailableSession;
import com.dodera.arni_fitness.model.dto.details.ActiveReservation;
import com.dodera.arni_fitness.model.dto.details.MembershipDetails;
import com.dodera.arni_fitness.model.dto.response.PurchaseResponse;
import com.dodera.arni_fitness.model.dto.response.UserDetailsResponse;
import com.dodera.arni_fitness.service.UserService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/details")
    public UserDetailsResponse getUserDetails() {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userService.getUserDetails(email);
    }

    @PostMapping("/reserveSession/{sessionId}")
    public ActiveReservation reserveSession(@PathVariable Long sessionId) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userService.reserveSession(email, sessionId);
    }

    @DeleteMapping("/cancelReservation/{reservationId}")
    public UserDetailsResponse cancelReservation(@PathVariable Long reservationId) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        userService.cancelReservation(email, reservationId);
        return userService.getUserDetails(email);
    }

    @PostMapping("/purchase/{subscriptionId}")
    public PurchaseResponse purchaseSubscription(@PathVariable Long subscriptionId) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userService.purchaseSubscription(email, subscriptionId);
    }

    @GetMapping("/memberships")
    public List<MembershipDetails> getUserMemberships() {
        return userService.getMemberships();
    }

    @GetMapping("/sessions/{date}")
    public List<AvailableSession> getAvailableSessions(@PathVariable String date) {
        return userService.getAvailableSessions(date);
    }

    @GetMapping("/payments")
    public Object getPageOfPayments(@RequestParam(defaultValue = "0") int page,
                                    @RequestParam(defaultValue = "5") int size) {
        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userService.getPageOfPayments(email, page, size);
    }

//    @GetMapping("/sessions/{date}")
//    public Object getDailySessions(@PathVariable String date) {
//        return userService.getDailySessions(date);
//    }
}
