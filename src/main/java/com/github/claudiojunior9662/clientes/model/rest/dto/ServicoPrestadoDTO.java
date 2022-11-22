package com.github.claudiojunior9662.clientes.model.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServicoPrestadoDTO {
    private String descricao;
    private String valor;
    private String data;
    private Integer idCliente;
}
