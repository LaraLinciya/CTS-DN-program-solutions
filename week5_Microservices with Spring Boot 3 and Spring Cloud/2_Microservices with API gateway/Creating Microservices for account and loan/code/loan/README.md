# Microservice - REST API: Loan Service

This hands-on demonstrates how to build a Spring Boot RESTful **Loan microservice** that returns dummy loan data for a given loan number. It works independently of the Account service.

---

##  Objective

To implement a REST API that:
- Accepts loan number as a path variable
- Returns hardcoded loan data as JSON
- Demonstrates microservice deployment on a different port

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

##  Steps Performed

1. **Generated project using Spring Initializr** with `Spring Web` and `DevTools`.
2. **Created `LoanController.java`** with `/loans/{number}` endpoint.
3. **Returned hardcoded loan JSON data** for the given loan number.
4. **Updated `application.properties`** to run on port `8081`.
5. **Tested the endpoint using Postman and browser.

---

##  Key Files & Locations

| **File Name**             | **Location**                                 |
|--------------------------|-----------------------------------------------|
| `LoanApplication.java`   | `src/main/java/com/cognizant/loan/`           |
| `LoanController.java`    | `src/main/java/com/cognizant/loan/controller/`|
| `application.properties` | `src/main/resources/`                         |
| `pom.xml`                | Root of the project (`loan/`)                 |

---

##  Endpoint Details

###  Get Loan Details

- **Method:** GET  
- **URL:** `http://localhost:8081/loans/H00987987972342`  
- **Response:**

```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
