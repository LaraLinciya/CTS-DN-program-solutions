# OrmLearn - Spring Data JPA Hands-On

This is a demo project for understanding Spring Data JPA, Hibernate, and MySQL integration.

---

orm-learn/
│
├── src/
│ └── main/
│ ├── java/
│ │ └── com/
│ │ └── cognizant/
│ │ └── ormlearn/
│ │ ├── OrmLearnApplication.java
│ │ ├── model/
│ │ │ └── Country.java
│ │ ├── repository/
│ │ │ └── CountryRepository.java
│ │ └── service/
│ │ └── CountryService.java
│ │
│ └── resources/
│ ├── application.properties
│ └── country.sql ← (Optional: schema/data script)
│
└── pom.xml

Copy
Edit


# OrmLearn - Spring Data JPA Hands-On

This is a demo project for understanding Spring Data JPA, Hibernate, and MySQL integration.

## Tech Stack
- Java 21
- Spring Boot 3.3.1
- Spring Data JPA
- Hibernate
- MySQL 8
- Maven

## Database Setup
```sql
CREATE DATABASE ormlearn;
USE ormlearn;

CREATE TABLE country (
  code VARCHAR(2) PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
