package com.emrebaglayici.menuapplication.Controllers.Dtos;

import com.emrebaglayici.menuapplication.Entities.Category;
import com.emrebaglayici.menuapplication.Entities.Product;
import com.emrebaglayici.menuapplication.Entities.Type;
import lombok.Setter;


@Setter
public class ProductCreateDto {
    private String name;
    private String shortInfo;
    private Integer price;
    private int order;
    private Category category;
    private Type type;
    public Product toProduct(){
        return Product.builder()
                .name(this.name)
                .shortInfo(this.shortInfo)
                .price(this.price)
                .orders(this.order)
                .category(this.category)
                .type(this.type)
                .build();
    }
}
