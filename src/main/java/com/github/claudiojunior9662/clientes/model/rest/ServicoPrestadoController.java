package com.github.claudiojunior9662.clientes.model.rest;

import com.github.claudiojunior9662.clientes.model.entity.ServicoPrestado;
import com.github.claudiojunior9662.clientes.model.repository.ClienteRepository;
import com.github.claudiojunior9662.clientes.model.repository.ServicoPrestadoRepository;
import com.github.claudiojunior9662.clientes.model.rest.dto.ServicoPrestadoDTO;
import com.github.claudiojunior9662.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.hibernate.type.descriptor.java.LocalDateJavaDescriptor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/servicos-prestados")
@RequiredArgsConstructor
public class ServicoPrestadoController {

    private final ClienteRepository clienteRepository;
    private final ServicoPrestadoRepository servicoPrestadoRepository;
    private final BigDecimalConverter bigDecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicoPrestado salvar(@RequestBody @Valid ServicoPrestadoDTO dto) {
        ServicoPrestado servicoPrestado = new ServicoPrestado(
            dto.getDescricao(),
            clienteRepository
                    .findById(dto.getIdCliente())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente não encontrado")),
            bigDecimalConverter.converter(dto.getValor()),
            LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"))
        );
        return servicoPrestadoRepository.save(servicoPrestado);
    }

    @GetMapping
    public List<ServicoPrestado> pesquisar(
            @RequestParam(value = "nomeCliente", required = false, defaultValue = "") String nomeCliente,
            @RequestParam(value = "mes", required = false) Integer mes
    ) {
        return servicoPrestadoRepository.findByNomeClienteAndMes(nomeCliente, mes);
    }

}
