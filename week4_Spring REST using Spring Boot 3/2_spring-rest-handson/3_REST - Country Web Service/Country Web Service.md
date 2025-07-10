# REST - Country Web Service

This hands-on demonstrates how to build a RESTful web service using Spring Boot that returns details of the country India by loading a bean from a Spring XML configuration.

---

## 🧪 Objective

To implement a REST API using:  
- Spring Boot Web  
- `@RequestMapping` annotation  
- Loading beans from Spring XML configuration  
- Returning JSON response automatically via Spring's message converters  

---

## ⚙️ Tech Stack

- Java 21  
- Spring Boot 3.x  
- Spring Web (REST)  
- Maven  
- SLF4J (Logback)  
- Eclipse IDE  
- Postman & Chrome (for testing)

---

## 🛠️ Steps Performed

1. Created a Spring XML file (`country.xml`) defining the India country bean.
2. Configured Spring to load the XML bean configuration.
3. Created `CountryController` with the `/country` endpoint.
4. Used `@RequestMapping("/country")` to expose the API.
5. In `getCountryIndia()` method, retrieved the India bean from Spring context and returned it.
6. Verified JSON response in browser and Postman.
7. Examined HTTP headers in browser’s developer tools and Postman.

---

## 📂 Key Files & Locations

| **File Name**               | **Location**                                               |
|-----------------------------|------------------------------------------------------------|
| `Country.java`              | `src/main/java/com/cognizant/spring_learn/model/`          |
| `CountryController.java`    | `src/main/java/com/cognizant/spring_learn/controller/`     |
| `SpringLearnApplication.java` | `src/main/java/com/cognizant/spring_learn/`               |
| `application.properties`    | `src/main/resources/`                                       |
| `country.xml`               | `src/main/resources/`                                       |
| `logback.xml`               | `src/main/resources/`                                       |
| `pom.xml`                   | Root of the project (`spring-learn/`)                      |

---

## 🌐 Endpoint Details

- **Method:** GET  
- **URL:** `http://localhost:8083/country`  
- **Response:**

```json
{
  "code": "IN",
  "name": "India"
}
