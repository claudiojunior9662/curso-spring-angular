package com.github.claudiojunior9662.clientes.model.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class ServicoPrestadoDTO {
    @NotEmpty(message = "{campo.descricao.invalido}")
    private String descricao;
    @NotEmpty(message = "{campo.valor.invalido}")
    private String valor;
    @NotEmpty(message = "{campo.data.invalido}")
    private String data;
    @NotNull(message = "{campo.cliente.invalido}")
    private Integer idCliente;
}
