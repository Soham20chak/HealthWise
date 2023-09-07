package haletechbackend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {
    @RequestMapping("/welcome")
    String welcome(){
        String text = "this is a private page";
        text+="This page is not allowed to unauntehenticated users";
        return text;
    }
}
