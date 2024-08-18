package com.dodera.arni_fitness.stripe;

import com.dodera.arni_fitness.stripe.StripeService;
import com.google.gson.JsonSyntaxException;
import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.checkout.Session;
import com.stripe.net.ApiResource;
import com.stripe.net.Webhook;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/stripe")
@RequiredArgsConstructor
public class StripeWebhook {
//    private static final String STRIPE_WEBHOOK_SECRET = "whsec_775ab7553db7e94ec91cfd87ad1713058aabf1423732e4dc049cfe708dff12d4";
    private final StripeService stripeService;

    @Value("${stripe.webhook.token}")
    private String webhookSecret;

    @PostMapping("/webhook")
    public ResponseEntity<?> handleStripeWebhook(@RequestBody String payload, @RequestHeader("Stripe-Signature") String signature) {
        // Verify the signature

        if(!isSignatureValid(payload, signature)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid signature");
        }
        Event event = null;
        try {
            event = ApiResource.GSON.fromJson(payload, Event.class);
        } catch(JsonSyntaxException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid json syntax");
        }

        // Handle the event
        if ("checkout.session.completed".equals(event.getType())) {
            Session session = (Session) event.getDataObjectDeserializer().getObject().orElse(null);
            stripeService.handleCheckoutSessionCompleted(session);
        }

        return ResponseEntity.ok().build();
    }

    private boolean isSignatureValid(String payload, String signature) {
        try {
            Webhook.Signature.verifyHeader(payload, signature, webhookSecret, 0);
            return true;
        } catch (SignatureVerificationException e) {
            return false;
        }
    }
}
