package com.github.claudiojunior9662.clientes.model.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
public class ServicoPrestado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;

    @Column
    private BigDecimal valor;

    @Column
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate data;

    public ServicoPrestado(String descricao, Cliente cliente, BigDecimal valor, LocalDate data) {
        this.descricao = descricao;
        this.cliente = cliente;
        this.valor = valor;
        this.data = data;
    }

    public ServicoPrestado() {
    }
}
