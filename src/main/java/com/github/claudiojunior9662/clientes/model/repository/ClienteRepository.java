package com.github.claudiojunior9662.clientes.model.repository;

import com.github.claudiojunior9662.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
