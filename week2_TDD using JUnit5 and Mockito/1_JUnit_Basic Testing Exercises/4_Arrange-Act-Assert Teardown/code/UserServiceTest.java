package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class UserServiceTest {

    private UserService userService;

    @Before
    public void setUp() {
        // Arrange: Initialize before each test
        userService = new UserService();
        System.out.println("Setup executed");
    }

    @After
    public void tearDown() {
        // Cleanup after each test
        userService = null;
        System.out.println("Teardown executed");
    }

    @Test
    public void testGetUserGreeting() {
        // Arrange: (already done in setUp)

        // Act:
        String greeting = userService.getUserGreeting("Lara");

        // Assert:
        assertEquals("Hello, Lara!", greeting);
    }
}
