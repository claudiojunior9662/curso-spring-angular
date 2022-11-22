package com.github.claudiojunior9662.clientes.util;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Objects;

@Component
public class BigDecimalConverter {

    public BigDecimal converter(String value) {
        if(Objects.isNull(value)) {
            throw new RuntimeException("Conversão de valor nulo");
        }
        value = value.replace(".", "").replace(",", ".");
        return new BigDecimal(value);
    }

}
