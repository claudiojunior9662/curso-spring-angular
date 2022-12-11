package com.github.claudiojunior9662.clientes.model.repository;

import com.github.claudiojunior9662.clientes.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
