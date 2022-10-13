package com.emrebaglayici.menuapplication.Business.Concretes;

import com.emrebaglayici.menuapplication.Business.Abstracts.IUser;
import com.emrebaglayici.menuapplication.Entities.User;
import com.emrebaglayici.menuapplication.Repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserManager implements IUser {
    private final UserRepository userRepository;

    public UserManager(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUser(User user) {
        this.userRepository.save(user);
    }

    @Override
    public boolean isLoginSuccess(String name, String password) {
        List<User> users=this.userRepository.findAll();
        for (User user:users){
            if (user.getName().equals(name)&&user.getPassword().equals(password))
                return true;
        }
        return false;
    }
}
