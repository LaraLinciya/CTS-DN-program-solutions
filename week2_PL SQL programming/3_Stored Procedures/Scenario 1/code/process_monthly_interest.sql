-- Scenario: Apply 1% Monthly Interest to All Savings Accounts

-- Step 1: Create the procedure
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

-- Step 2: Call the procedure
BEGIN
    ProcessMonthlyInterest;
END;
/

-- Step 3: View the updated Accounts
SELECT * FROM Accounts;
