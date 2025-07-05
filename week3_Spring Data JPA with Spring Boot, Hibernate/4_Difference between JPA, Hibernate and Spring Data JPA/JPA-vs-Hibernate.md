#  Hands-on 4: Difference between JPA, Hibernate, and Spring Data JPA

---

##  Difference Between JPA, Hibernate, and Spring Data JPA

| Feature               | JPA                         | Hibernate                       | Spring Data JPA                            |
|----------------------|-----------------------------|----------------------------------|--------------------------------------------|
| Type                 | Specification               | Implementation of JPA           | Framework built on top of JPA/Hibernate    |
| Boilerplate Code     | Medium                      | High                             | Very Low                                   |
| Implementation Needed| Yes (e.g., Hibernate)       | Already provides implementation | Uses Hibernate (or others) internally      |
| Transaction Mgmt     | Manual                      | Manual                           | Auto-managed by Spring                     |
| Abstraction Level    | Base layer                  | Middle layer                     | Highest layer (Most simplified)            |

---

---

##  Java Persistence API (JPA)

- JPA is a **Java specification (JSR 338)** for accessing, persisting, and managing data between Java objects and a relational database.
- It is just an interface – does not provide actual implementation.
- JPA defines the standard annotations and APIs.
- Needs a provider like **Hibernate** to be used in a real application.

---

##  Hibernate

- Hibernate is an **ORM (Object Relational Mapping)** tool.
- It is the **most popular implementation of JPA**.
- Provides additional features beyond the JPA specification.
- Manages session, transaction, caching, and complex mappings.

---

##  Spring Data JPA

- Spring Data JPA is part of the **Spring ecosystem**.
- It is a **wrapper over JPA/Hibernate** that reduces boilerplate code.
- It **does not implement JPA itself**.
- Allows developers to interact with the database using interfaces and method names.
- Provides built-in **transaction management** and dynamic query generation.

---

##  Code Comparison

###  1. JPA (Using EntityManager)

```java
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

public class EmployeeService {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public void addEmployee(Employee employee) {
        entityManager.persist(employee);
    }
}

---

### Hibernate Example

```java
// Manual Hibernate session management
public Integer addEmployee(Employee employee){
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee); 
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();
        e.printStackTrace(); 
    } finally {
        session.close(); 
    }
    return employeeID;
}

---

##  Spring Data JPA Example

Spring Data JPA is part of the Spring ecosystem that helps in abstracting boilerplate code for database access. It internally uses JPA (with Hibernate by default) and allows you to interact with databases using simple interfaces.

---

###  EmployeeRepository.java

```java
package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}


---

###  EmployeeService.java

```java
package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.model.Employee;
import com.example.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
