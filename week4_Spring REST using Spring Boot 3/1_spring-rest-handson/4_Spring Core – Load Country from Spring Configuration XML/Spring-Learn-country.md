# SpringLearn - Load Country Bean from XML (Hands-On 4)

This hands-on demonstrates how to configure and load a Java bean (`Country`) using a Spring XML configuration file (`country.xml`) in a simple Spring Core application.

---

## 🧪 Objective

To demonstrate how to:
- Configure a Java bean using Spring's XML-based configuration.
- Load the bean using `ClassPathXmlApplicationContext`.
- Log constructor, getter, and setter invocations using SLF4J.

---

## ⚙️ Tech Stack

- Java 21  
- Spring Core (Context)  
- Maven  
- SLF4J with Logback  
- Eclipse IDE

---

## 🛠️ Steps Performed

1. Created a Java class `Country` with fields `code` and `name`, and added debug logs in constructor, getters, and setters.
2. Configured a Spring XML file `country.xml` to define the `country` bean.
3. Wrote a `displayCountry()` method inside `SpringLearnApplication` to load and display the bean.
4. Added `logback.xml` to print logs to the console.
5. Verified output logs on successful execution of the main method.

---

## 📂 Key Files & Locations

| **File Name**                | **Location**                                             |
|-----------------------------|-----------------------------------------------------------|
| `SpringLearnApplication.java` | `src/main/java/com/cognizant/spring_learn/`            |
| `Country.java`              | `src/main/java/com/cognizant/spring_learn/`              |
| `country.xml`               | `src/main/resources/`                                     |
| `logback.xml` *(optional)*  | `src/main/resources/`                                     |
| `pom.xml`                   | Root of the project (`spring-learn/`)                     |
| `output-country-console.png`| `output/` *(screenshot of expected console log)*          |
