# Microservice - REST API: Account Service

This hands-on demonstrates how to build a Spring Boot RESTful **Account microservice** that returns dummy account data based on an account number. This is part of a microservices-based banking application.

---

##  Objective

To implement a REST API that:
- Accepts account number as a path variable
- Returns dummy account data as JSON
- Demonstrates isolated service functionality without backend/database

---

##  Tech Stack

- Java 21  
- Spring Boot 3.x  
- Spring Web  
- Spring Boot DevTools  
- Maven  
- Eclipse IDE / IntelliJ  
- Postman / Browser

---

## 🛠️ Steps Performed

1. **Generated project using Spring Initializr** with `Spring Web` and `DevTools`.
2. **Created `AccountController.java`** with `/accounts/{number}` endpoint.
3. **Returned a hardcoded JSON response** for the given account number.
4. **Configured `application.properties`** to run on default port `8080`.
5. **Tested using Postman and browser.**

---

##  Key Files & Locations

| **File Name**                | **Location**                                               |
|-----------------------------|------------------------------------------------------------|
| `AccountApplication.java`   | `src/main/java/com/cognizant/account/`                     |
| `AccountController.java`    | `src/main/java/com/cognizant/account/controller/`          |
| `application.properties`    | `src/main/resources/`                                      |
| `pom.xml`                   | Root of the project (`account/`)                           |

---

##  Endpoint Details

###  **Get Account Details**

- **Method:** GET  
- **URL:** `http://localhost:8080/accounts/00987987973432`  
- **Response:**
```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
