# SpringLearn - REST API: Get Country by Code

This hands-on demonstrates how to build a Spring Boot RESTful service that returns details of a country based on a country code. The matching is case-insensitive and data is loaded from an XML configuration.

---

##  Objective

To implement a REST API that:
- Accepts a country code as a path variable
- Searches through a list of countries loaded from an XML file
- Returns the matching country as a JSON response
- Uses service layer and XML-based bean configuration

---

##  Tech Stack

- Java 21  
- Spring Boot 3.x  
- Spring Web (REST)  
- Spring XML Configuration  
- Maven   
- Eclipse IDE  
- Postman & Browser (for testing)

---

##  Steps Performed

1. Created `Country.java` model class with `code` and `name`.
2. Configured `country.xml` with a list of predefined country beans.
3. Implemented `CountryService` to fetch country based on case-insensitive code match.
4. Implemented `CountryController` with `@GetMapping("/countries/{code}")`.
5. Loaded XML configuration using `@ImportResource` in the main class.
6. Tested the service using Postman and browser.

---

##  Key Files & Locations

| **File Name**                | **Location**                                               |
|-----------------------------|------------------------------------------------------------|
| `Country.java`              | `src/main/java/com/cognizant/spring_learn/model/`          |
| `CountryController.java`    | `src/main/java/com/cognizant/spring_learn/controller/`     |
| `CountryService.java`       | `src/main/java/com/cognizant/spring_learn/service/`        |
| `country.xml`               | `src/main/resources/`                                       |
| `SpringLearnApplication.java` | `src/main/java/com/cognizant/spring_learn/`              |
| `application.properties`    | `src/main/resources/`                                       |
| `pom.xml`                   | Root of the project (`spring-learn/`)                      |

---

##  Endpoint Details

- **Method:** GET  
- **URL:** `http://localhost:8083/countries/{code}`  
- **Example:** `http://localhost:8083/countries/in`  
- **Response:**

```json
{
  "code": "IN",
  "name": "India"
}
