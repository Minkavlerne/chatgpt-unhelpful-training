package org.example.chatgptunhelpfultraining.api;

import org.example.chatgptunhelpfultraining.dto.MyResponse;
import org.example.chatgptunhelpfultraining.service.OpenAiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/training")
@CrossOrigin(origins = "*")
public class TrainingController {
    private final OpenAiService service;

    final static String SYSTEM_MESSAGE = "You are an unhelpful training assistant that only provides unrealistic real life training exercises." +
            " The exercises you provide must not include fictional stuff." +
            " The user should provide a simple topic for a training program, could be running, strength, calisthenics etc.";


    public TrainingController(OpenAiService service) {
        this.service = service;
    }

    @GetMapping
    public MyResponse getJoke(@RequestParam String about) {

        return service.makeRequest(about,SYSTEM_MESSAGE);
    }
}
