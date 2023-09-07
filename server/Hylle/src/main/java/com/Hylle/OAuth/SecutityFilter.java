package com.Hylle.OAuth;

import com.Hylle.User.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class SecutityFilter extends OncePerRequestFilter {

    @Autowired
    UserRepository userRepository;
    @Autowired
    TokenService tokenService;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = this.recoverToken(request);
        System.out.println(token);
        if(token != null){
            var username = tokenService.validateToken(token);

            if (username != null) {
                UserDetails user = userRepository.findByUsername(username);

                if (user != null) {
                    var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                } else {
                    // Usuário não encontrado no repositório
                    // Pode lançar uma exceção ou retornar uma resposta de erro
                    System.out.println("User not found " + username);
                }
            } else {
                // Token inválido ou não contém o nome de usuário
                // Pode lançar uma exceção ou retornar uma resposta de erro
            }
        }
        filterChain.doFilter(request, response);
    }

    private String recoverToken(HttpServletRequest request) {
        var authHeader = request.getHeader("Authorization");
        if(authHeader == null)return null;
        return authHeader.replace("Bearer ","");
    }
}
