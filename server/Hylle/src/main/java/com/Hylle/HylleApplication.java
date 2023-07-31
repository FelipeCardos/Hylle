package com.Hylle;

import com.Hylle.User.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
public class HylleApplication {

	public static void main(String[] args) {
		SpringApplication.run(HylleApplication.class, args);
	}

}
