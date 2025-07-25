# SpringLearn - REST API: JWT Authentication Service

This hands-on demonstrates how to build a Spring Boot RESTful **authentication service** that returns a **JWT (JSON Web Token)** on successful login. The token can then be used to access secured endpoints.

---

##  Objective

To implement a JWT-based authentication system that:
- Accepts credentials using Basic Auth (`-u user:pwd`)
- Authenticates against an in-memory user store
- Generates a secure JWT token
- Returns the token in the response for client use

---

##  Tech Stack

- Java 21  
- Spring Boot 3.x  
- Spring Security  
- JSON Web Token (JJWT - `io.jsonwebtoken`)  
- Maven  
- Eclipse IDE / IntelliJ  
- Curl & Postman (for testing)

---

## Steps Performed

1. **Created `JwtUtil.java`** to generate a secure JWT using HS256 algorithm.
2. **Created `AuthenticationController.java`** with endpoint `/authenticate` to return the token.
3. **Configured `SecurityConfig.java`** to permit `/authenticate` and secure all other endpoints.
4. **Used `BasicAuthenticationFilter`** to read `Authorization` header and extract credentials.
5. **Added proper Maven dependencies** for JWT and Spring Security.
6. **Tested via CURL** command to get a valid JWT token.

---

##  Key Files & Locations

| **File Name**                | **Location**                                               |
|-----------------------------|------------------------------------------------------------|
| `JwtUtil.java`              | `src/main/java/com/cognizant/spring_learn/util/`           |
| `AuthenticationController.java` | `src/main/java/com/cognizant/spring_learn/controller/`   |
| `SecurityConfig.java`       | `src/main/java/com/cognizant/spring_learn/config/`         |
| `SpringLearnApplication.java` | `src/main/java/com/cognizant/spring_learn/`              |
| `application.properties`    | `src/main/resources/`                                       |
| `pom.xml`                   | Root of the project (`spring-learn/`)                      |

---

##  Endpoint Details

### 🔐 **Authenticate and Get Token**

- **Method:** GET  
- **URL:** `http://localhost:8090/authenticate`  
- **Auth Type:** Basic Auth  
- **Example CURL:**
```bash
curl -s -u user:pwd http://localhost:8090/authenticate
