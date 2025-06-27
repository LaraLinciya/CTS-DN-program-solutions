--Scenario 1: Apply 1% Discount on Loan Interest for Customers above 60 Years Old

-- Step 1: PL/SQL block to update interest rate
BEGIN
    FOR c IN (SELECT CustomerID, DOB FROM Customers) LOOP
        IF MONTHS_BETWEEN(SYSDATE, c.DOB) / 12 > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Step 2: Verify the result after update
SELECT * FROM Loans;
