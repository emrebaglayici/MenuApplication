package com.emrebaglayici.menuapplication.Business.Abstracts;

import com.emrebaglayici.menuapplication.Controllers.Dtos.ProductCreateDto;
import com.emrebaglayici.menuapplication.Entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProduct {
    void saveProduct(ProductCreateDto dto);
    Page<Product> listProducts(Pageable pageable);

    Product updateProduct(Product toProduct);

    Product deleteById(Long id);
}
