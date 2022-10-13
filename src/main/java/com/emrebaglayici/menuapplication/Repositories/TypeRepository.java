package com.emrebaglayici.menuapplication.Repositories;

import com.emrebaglayici.menuapplication.Entities.Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<Type,Long> {
}
