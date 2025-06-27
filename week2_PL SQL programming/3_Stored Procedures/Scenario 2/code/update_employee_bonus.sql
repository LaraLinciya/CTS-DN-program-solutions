-- Scenario: Add Bonus to Employees of a Specific Department

-- Step 1: Create the procedure
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_pct IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_pct / 100))
    WHERE Department = p_department;

    COMMIT;
END;
/

-- Step 2: Call the procedure (example: 10% bonus for IT)
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/

-- Step 3: View updated Employees
SELECT * FROM Employees;
