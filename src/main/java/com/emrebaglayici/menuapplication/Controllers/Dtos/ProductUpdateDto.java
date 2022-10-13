package com.emrebaglayici.menuapplication.Controllers.Dtos;

import com.emrebaglayici.menuapplication.Entities.Category;
import com.emrebaglayici.menuapplication.Entities.Product;
import com.emrebaglayici.menuapplication.Entities.Type;
import lombok.Setter;

@Setter
public class ProductUpdateDto {
    private Long id;
    private String name;
    private String shortInfo;
    private Integer price;
    private Integer orders;
    private Category category;
    private Type type;
    public Product toProduct(){
        return Product.builder()
                .id(this.id)
                .name(this.name)
                .shortInfo(this.shortInfo)
                .price(this.price)
                .orders(this.orders)
                .category(this.category)
                .type(this.type)
                .build();
    }
}
