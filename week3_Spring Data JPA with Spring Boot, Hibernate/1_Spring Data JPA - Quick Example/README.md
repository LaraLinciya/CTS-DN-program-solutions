# OrmLearn - Spring Data JPA Hands-On

This is a demo project for understanding Spring Data JPA, Hibernate, and MySQL integration.

---
## 📂 Key Files & Locations

| File Name                | Location                                                   |
|--------------------------|------------------------------------------------------------|
| `Country.java`           | `src/main/java/com/cognizant/ormlearn/model/`              |
| `CountryRepository.java` | `src/main/java/com/cognizant/ormlearn/repository/`         |
| `CountryService.java`    | `src/main/java/com/cognizant/ormlearn/service/`            |
| `OrmLearnApplication.java` | `src/main/java/com/cognizant/ormlearn/`                 |
| `application.properties` | `src/main/resources/`                                      |
| `pom.xml`                | Root of the project (`orm-learn/`)                         |



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
