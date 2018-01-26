package com.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.interceptor.PermissionInterceptor;


@Component
@ComponentScan(basePackages = "com")
public class WebApplicationConfig extends WebMvcConfigurerAdapter {
	
	@Autowired
	private PermissionInterceptor pi;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(pi)
				.addPathPatterns("/**");
	}

}
