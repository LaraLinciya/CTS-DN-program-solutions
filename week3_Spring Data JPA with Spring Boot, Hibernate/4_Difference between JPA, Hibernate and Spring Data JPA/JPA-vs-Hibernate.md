# 🧩 Hands-on 4: Difference between JPA, Hibernate, and Spring Data JPA

---

## 📊 Difference Between JPA, Hibernate, and Spring Data JPA

| Feature               | JPA                         | Hibernate                       | Spring Data JPA                            |
|----------------------|-----------------------------|----------------------------------|--------------------------------------------|
| Type                 | Specification               | Implementation of JPA           | Framework built on top of JPA/Hibernate    |
| Boilerplate Code     | Medium                      | High                             | Very Low                                   |
| Implementation Needed| Yes (e.g., Hibernate)       | Already provides implementation | Uses Hibernate (or others) internally      |
| Transaction Mgmt     | Manual                      | Manual                           | Auto-managed by Spring                     |
| Abstraction Level    | Base layer                  | Middle layer                     | Highest layer (Most simplified)            |

---

## 📘 Java Persistence API (JPA)

- JPA is a **Java specification (JSR 338)** for accessing, persisting, and managing data between Java objects and a relational database.
- It defines standard annotations and APIs.
- It does not provide actual implementation.
- Needs a JPA provider like **Hibernate** underneath.

---

## 🔧 Hibernate

- Hibernate is the **most popular implementation** of JPA.
- It is an **ORM (Object Relational Mapping)** tool.
- Provides features like:
  - Session & Transaction management
  - Caching support
  - Complex mapping strategies

---

## 🌱 Spring Data JPA

- Spring Data JPA is part of the **Spring ecosystem**.
- It is a **wrapper over JPA/Hibernate**.
- Reduces boilerplate by using repository interfaces.
- Supports automatic query generation and transaction management.

---

## 💻 Code Comparison

### 🟦 1. JPA (Using EntityManager)

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
Plain JPA code using EntityManager

Requires a provider (like Hibernate)

Needs transaction and entity management setup

🟨 2. Hibernate Example
java
Copy
Edit
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.HibernateException;

public class EmployeeDAO {

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
}
Native Hibernate API usage

More boilerplate code than JPA

Needs manual session and transaction management

🟩 3. Spring Data JPA
✅ EmployeeRepository.java
java
Copy
Edit
package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
✅ EmployeeService.java
java
Copy
Edit
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
Clean and concise

No implementation code needed

Spring Boot handles transaction, session, and query execution

