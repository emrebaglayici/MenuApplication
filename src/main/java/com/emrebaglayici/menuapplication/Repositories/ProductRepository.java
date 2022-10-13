package com.emrebaglayici.menuapplication.Repositories;

import com.emrebaglayici.menuapplication.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
