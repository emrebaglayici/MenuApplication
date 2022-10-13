package com.emrebaglayici.menuapplication;

import com.emrebaglayici.menuapplication.Business.Concretes.UserManager;
import com.emrebaglayici.menuapplication.Entities.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MenuApplication implements CommandLineRunner {
    private final UserManager userManager;

    public MenuApplication(UserManager userManager) {
        this.userManager = userManager;
    }

    public static void main(String[] args) {
        SpringApplication.run(MenuApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        User user=new User(1L,"admin","123");
        userManager.saveUser(user);
    }
}
