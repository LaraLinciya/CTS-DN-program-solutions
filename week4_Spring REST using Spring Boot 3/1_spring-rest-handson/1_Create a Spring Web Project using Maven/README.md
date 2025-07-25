# SpringLearn - Spring Boot Web Project Setup 

This is a basic Spring Boot project setup using Maven to initialize a web application with Spring Boot DevTools and Spring Web dependency.

---

##  Objective

To learn how to:
- Create a Spring Boot project using [start.spring.io](https://start.spring.io)
- Import it into Eclipse
- Run and verify the project structure and configuration

---

##  Tech Stack

- Java 17+ or 21  
- Spring Boot 3.x  
- Maven  
- Eclipse or IntelliJ IDEA

---

##  Steps Performed

1. Project generated using Spring Initializr with:
   - Group: `com.cognizant`
   - Artifact: `spring-learn`
   - Dependencies: **Spring Boot DevTools**, **Spring Web**

2. Project built using Maven with proxy configuration:
   ```bash
   mvn clean package -Dhttp.proxyHost=proxy.cognizant.com -Dhttp.proxyPort=6050 \
     -Dhttps.proxyHost=proxy.cognizant.com -Dhttps.proxyPort=6050 -Dhttp.proxyUser=123456
   ```

3. Project imported in Eclipse as a Maven project.

4. Ran `SpringLearnApplication.java` and verified output using a log in the `main()` method.

---

##  Key Files & Locations

| **File Name**                | **Location**                                             |
|-----------------------------|-----------------------------------------------------------|
| `SpringLearnApplication.java` | `src/main/java/com/cognizant/springlearn/`             |
| `application.properties`    | `src/main/resources/`                                     |
| `pom.xml`                   | Root of the project (`spring-learn/`)                     |
| `.mvn/`                     | `spring-learn/.mvn/` (Maven wrapper configuration)         |
| `mvnw`, `mvnw.cmd`          | Root of the project (used to run Maven wrapper commands)  |
| `src/test/java/`            | `src/test/java/com/cognizant/springlearn/`                |

---

