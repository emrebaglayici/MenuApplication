package com.emrebaglayici.menuapplication.Repositories;

import com.emrebaglayici.menuapplication.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    List<Product> findProductByCategoryNameAndTypeNameOrderByOrders(String categoryName, String typeName);
}
