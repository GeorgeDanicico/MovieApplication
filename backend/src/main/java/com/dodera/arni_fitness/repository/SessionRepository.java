package com.dodera.arni_fitness.repository;

import com.dodera.arni_fitness.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SessionRepository extends JpaRepository<Session, Long> {
//    List<Session> findAll();
}
