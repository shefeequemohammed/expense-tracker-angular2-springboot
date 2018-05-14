package com.shef.expensetracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class ExpenseTrackerApplication {
	
	/*@Configuration
	public class AppConfig extends WebMvcConfigurerAdapter {
	  @Override
	  public void addCorsMappings(CorsRegistry registry) {
	      registry.addMapping("http://localhost:4200")
	            .allowedOrigins("http://localhost:4200/vendors")
	            .allowedHeaders("Access-Control-Allow-Origin", "*")
	            .allowedHeaders("Access-Control-Allow-Headers", "Content-Type,x-requested-with").maxAge(20000)
	            .allowCredentials(false)
	            .allowedMethods("DELETE","POST","PUT");
	 }
	}
*/

	public static void main(String[] args) {
		SpringApplication.run(ExpenseTrackerApplication.class, args);
	}
}
