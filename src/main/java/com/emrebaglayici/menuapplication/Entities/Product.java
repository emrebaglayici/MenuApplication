package com.emrebaglayici.menuapplication.Entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data @Entity @AllArgsConstructor @NoArgsConstructor @Builder @Table(name = "product")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String shortInfo;
    private Integer price;
    private Integer orders;
    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "category_id",nullable = false)
    private Category category;
    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "type_id",nullable = false)
    private Type type;
}
