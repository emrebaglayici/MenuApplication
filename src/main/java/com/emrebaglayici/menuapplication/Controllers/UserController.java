package com.emrebaglayici.menuapplication.Controllers;

import com.emrebaglayici.menuapplication.Business.Abstracts.IUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class UserController {
    private final IUser iUser;

    public UserController(IUser iUser) {
        this.iUser = iUser;
    }

    @GetMapping("login")
    public boolean isLogin(@RequestParam String name,@RequestParam String password){
        return this.iUser.isLoginSuccess(name,password);
    }
}
