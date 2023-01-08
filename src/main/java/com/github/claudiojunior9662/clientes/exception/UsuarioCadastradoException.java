package com.github.claudiojunior9662.clientes.exception;

public class UsuarioCadastradoException extends RuntimeException{

    public UsuarioCadastradoException(String login){
        super("Login já cadastrado para o usuário: " + login);
    }

}
