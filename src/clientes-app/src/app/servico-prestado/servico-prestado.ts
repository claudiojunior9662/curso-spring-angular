import { Cliente } from "../clientes/cliente";

export class ServicoPrestado {
    descricao?: string;
    valor?: string;
    data?: string;
    idCliente?: number;
}

export class ServicoPrestadoBusca {
    descricao?: string;
    valor?: string;
    data?: string;
    cliente?: Cliente;
}