-- Scenario 2: Mark Customers as VIP if Balance > 10000

-- Step 1: Add IsVIP column (if not already added)
ALTER TABLE Customers ADD (IsVIP CHAR(1));
/

-- Step 2: Mark customers as VIP based on balance
BEGIN
    FOR c IN (SELECT * FROM Customers) LOOP
        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'Y'
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Step 3: View the updated customer list
SELECT CustomerID, Name, Balance, IsVIP FROM Customers;
