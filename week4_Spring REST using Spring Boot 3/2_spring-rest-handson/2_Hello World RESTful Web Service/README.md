# SpringLearn - Hello World REST API 

This hands-on demonstrates how to build a simple RESTful web service using Spring Boot that returns a `Hello World!!` message.

---

##  Objective

To implement a REST API using:
- Spring Boot Web
- `@RestController` and `@GetMapping`
- Logging with SLF4J

---

##  Tech Stack

- Java 21  
- Spring Boot 3.x  
- Spring Web (REST)  
- Maven  
- SLF4J (Logback)  
- Eclipse IDE  
- Postman & Chrome (for testing)

---

##  Steps Performed

1. Set server port to `8083` in `application.properties`.
2. Created a `HelloController` class with the `/hello` endpoint.
3. Used `@RestController` and `@GetMapping("/hello")` to expose the API.
4. Added start and end logs inside the `sayHello()` method.
5. Ran the application and verified the output on browser and Postman.

---

##  Endpoint Details

- **Method:** GET  
- **URL:** `http://localhost:8083/hello`  
- **Response:** `Hello World!!`  
- **Controller:** `HelloController.java`  
- **Method Signature:** `public String sayHello()`

---

## Key Files & Locations

| **File Name**                | **Location**                                               |
|-----------------------------|-------------------------------------------------------------|
| `HelloController.java`       | `src/main/java/com/cognizant/spring_learn/controller/`     |
| `SpringLearnApplication.java` | `src/main/java/com/cognizant/spring_learn/`              |
| `application.properties`     | `src/main/resources/`                                      |
| `pom.xml`                   | Root of the project (`spring-learn/`)                       |

---

