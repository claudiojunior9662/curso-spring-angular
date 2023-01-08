package com.github.claudiojunior9662.clientes.model.rest;

import com.github.claudiojunior9662.clientes.exception.UsuarioCadastradoException;
import com.github.claudiojunior9662.clientes.model.entity.Usuario;
import com.github.claudiojunior9662.clientes.model.repository.UsuarioRepository;
import com.github.claudiojunior9662.clientes.model.service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void salvar(@RequestBody @Valid Usuario usuario) {
        try {
            this.usuarioService.salvar(usuario);
        }catch (UsuarioCadastradoException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}
