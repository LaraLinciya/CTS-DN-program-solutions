# 🧩 Hands-on 4: Difference between JPA, Hibernate, and Spring Data JPA

---

## 📘 Java Persistence API (JPA)

- JPA is a **Java specification (JSR 338)** for accessing, persisting, and managing data between Java objects and a relational database.
- It is just an interface – does not provide actual implementation.
- JPA defines the standard annotations and APIs.
- Needs a provider like **Hibernate** to be used in a real application.

---

## 🔧 Hibernate

- Hibernate is an **ORM (Object Relational Mapping)** tool.
- It is the **most popular implementation of JPA**.
- Provides additional features beyond the JPA specification.
- Manages session, transaction, caching, and complex mappings.

---

## 🌱 Spring Data JPA

- Spring Data JPA is part of the **Spring ecosystem**.
- It is a **wrapper over JPA/Hibernate** that reduces boilerplate code.
- It **does not implement JPA itself**.
- Allows developers to interact with the database using interfaces and method names.
- Provides built-in **transaction management** and dynamic query generation.

---

## 💻 Code Comparison

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
