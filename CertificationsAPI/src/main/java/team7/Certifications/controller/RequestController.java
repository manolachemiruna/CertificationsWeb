package team7.Certifications.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import team7.Certifications.service.RequestService;


@RestController
public class RequestController {

    @Autowired
    private RequestService requestService;


}
