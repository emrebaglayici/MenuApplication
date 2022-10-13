package com.emrebaglayici.menuapplication.Controllers.Dtos;

import com.emrebaglayici.menuapplication.Entities.Category;
import com.emrebaglayici.menuapplication.Entities.Type;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductListDto {
    private Long id;
    private String name;
    private String shortInfo;
    private Integer price;
    private Integer orders;
    private Category category;
    private Type type;
}
