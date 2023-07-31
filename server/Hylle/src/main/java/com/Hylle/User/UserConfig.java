package com.Hylle.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository){
        return args -> {
                    User newUser = new User(
                            "felcarbib@gmail.com",
                            "fe_carbib",
                            "Qg4-+2Zp5a",
                            "ATIVO"

                    );
                    repository.saveAll(List.of(newUser));
        };
    }
}
