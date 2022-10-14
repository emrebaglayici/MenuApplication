package com.emrebaglayici.menuapplication.Business.Concretes;


import com.emrebaglayici.menuapplication.Business.Abstracts.IProduct;
import com.emrebaglayici.menuapplication.Controllers.Dtos.ProductCreateDto;
import com.emrebaglayici.menuapplication.Entities.Product;
import com.emrebaglayici.menuapplication.Exceptions.FillTheBlanksException;
import com.emrebaglayici.menuapplication.Exceptions.NotFoundException;
import com.emrebaglayici.menuapplication.Repositories.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ProductManager implements IProduct {
    private final ProductRepository productRepository;

    public ProductManager(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void saveProduct(ProductCreateDto dto) {

        if (dto.toProduct().getName().equals("")
        || dto.toProduct().getPrice()<0 || dto.toProduct().getOrders()<0
        || dto.toProduct().getCategory()==null ||dto.toProduct().getType()==null){
            throw new FillTheBlanksException("Fill all areas correctly");
        }
        log.info("Product created successfully -> "+dto.toProduct());
        this.productRepository.save(dto.toProduct());
    }



    @Override
    public Page<Product> listProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product updateProduct(Product toProduct) {
        Optional<Product> optionalProduct=this.productRepository.findById(toProduct.getId());
        Product product=optionalProduct.orElseThrow(()->new NotFoundException("Product not found"));
        if (product.getName().equals("") || product.getPrice()<0 || product.getOrders()<0
        || product.getCategory()==null || product.getType()==null){
            throw new FillTheBlanksException("Fill all areas correctly");
        }
        product.setName(toProduct.getName());
        product.setShortInfo(toProduct.getShortInfo());
        product.setPrice(toProduct.getPrice());
        product.setOrders(toProduct.getOrders());
        product.setCategory(toProduct.getCategory());
        product.setType(toProduct.getType());
        return productRepository.save(product);
    }

    @Override
    public Product deleteById(Long id) {
        Optional<Product> optionalProduct=this.productRepository.findById(id);
        Product product=optionalProduct.orElseThrow(()->new NotFoundException("Product not found"));
        log.info("Product deleted successfully");
        this.productRepository.delete(product);
        return product;
    }

    @Override
    public List<Product> findProductByCategoryNameAndTypeNameOrderByOrders(String categoryName, String typeName) {
        return this.productRepository.findProductByCategoryNameAndTypeNameOrderByOrders(categoryName,typeName);
    }
}
