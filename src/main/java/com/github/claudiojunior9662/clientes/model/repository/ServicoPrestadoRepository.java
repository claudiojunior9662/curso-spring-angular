package com.github.claudiojunior9662.clientes.model.repository;

import com.github.claudiojunior9662.clientes.model.entity.ServicoPrestado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer> {
    @Query("select s from ServicoPrestado s " +
            "join s.cliente sc " +
            "where lower(sc.nome) like concat('%', lower(:nomeCliente), '%') and month(s.data) = :mes")
    List<ServicoPrestado> findByNomeClienteAndMes(@Param("nomeCliente") String nomeCliente, @Param("mes") Integer mes);
}
