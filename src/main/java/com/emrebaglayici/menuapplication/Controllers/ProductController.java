package com.emrebaglayici.menuapplication.Controllers;

import com.emrebaglayici.menuapplication.Business.Abstracts.IProduct;
import com.emrebaglayici.menuapplication.Controllers.Dtos.ProductCreateDto;
import com.emrebaglayici.menuapplication.Controllers.Dtos.ProductDto;
import com.emrebaglayici.menuapplication.Controllers.Dtos.ProductListDto;
import com.emrebaglayici.menuapplication.Controllers.Dtos.ProductUpdateDto;
import com.emrebaglayici.menuapplication.Entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class ProductController {
    private final IProduct iProduct;

    public ProductController(IProduct iProduct) {
        this.iProduct = iProduct;
    }

    @PostMapping("product")
    public void create(@RequestBody ProductCreateDto dto){
        this.iProduct.saveProduct(dto);
    }

    @GetMapping("products")
    public Page<ProductListDto> listProducts(Pageable pageable){
        return iProduct.listProducts(pageable)
                .map(product ->ProductListDto.builder()
                        .id(product.getId())
                        .name(product.getName())
                        .shortInfo(product.getShortInfo())
                        .price(product.getPrice())
                        .orders(product.getOrders())
                        .category(product.getCategory())
                        .type(product.getType())
                        .build());
    }

    @GetMapping("getByCategoryAndType")
    public List<Product> getByCategoryAndType(@RequestParam String categoryName, @RequestParam String typeName){
        return this.iProduct.findProductByCategoryNameAndTypeNameOrderByOrders(categoryName,typeName);
    }

    @PatchMapping("/updateProduct/")
    public ProductDto updateProduct(@RequestBody ProductUpdateDto dto){
        Product product=iProduct.updateProduct(dto.toProduct());
        return ProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .shortInfo(product.getShortInfo())
                .price(product.getPrice())
                .orders(product.getOrders())
                .category(product.getCategory())
                .type(product.getType())
                .build();
    }

    @DeleteMapping("product/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        return ResponseEntity.ok(this.iProduct.deleteById(id));
    }
}
