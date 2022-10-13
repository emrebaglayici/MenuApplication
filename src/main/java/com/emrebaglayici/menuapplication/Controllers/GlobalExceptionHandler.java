package com.emrebaglayici.menuapplication.Controllers;

import com.emrebaglayici.menuapplication.Exceptions.FillTheBlanksException;
import com.emrebaglayici.menuapplication.Exceptions.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({FillTheBlanksException.class})
    public ResponseEntity<CustomError> handleFillTheBlanksException(RuntimeException ex) {
        log.info("FillTheBlanksException occurred");
        return ResponseEntity.status(HttpStatus.NOT_EXTENDED)
                .body(CustomError.builder()
                        .status(HttpStatus.NOT_EXTENDED.value())
                        .error(HttpStatus.NOT_EXTENDED.getReasonPhrase())
                        .message(ex.getMessage())
                        .timestamp(LocalDateTime.now())
                        .build());
    }

    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity<CustomError> handleNotFoundException(RuntimeException ex) {
        log.info("FillTheBlanksException occurred");
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(CustomError.builder()
                        .status(HttpStatus.NOT_FOUND.value())
                        .error(HttpStatus.NOT_FOUND.getReasonPhrase())
                        .message(ex.getMessage())
                        .timestamp(LocalDateTime.now())
                        .build());
    }


}
