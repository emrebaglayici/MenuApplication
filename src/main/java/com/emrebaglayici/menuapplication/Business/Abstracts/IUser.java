package com.emrebaglayici.menuapplication.Business.Abstracts;

import com.emrebaglayici.menuapplication.Entities.User;

public interface IUser {
    void saveUser(User user);
    boolean isLoginSuccess(String name,String password);
}
