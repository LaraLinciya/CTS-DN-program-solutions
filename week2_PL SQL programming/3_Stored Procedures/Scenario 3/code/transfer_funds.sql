-- Scenario: Transfer funds from one account to another

-- Step 1: Create the procedure
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN
        UPDATE Accounts SET Balance = Balance - p_amount WHERE AccountID = p_from_account;
        UPDATE Accounts SET Balance = Balance + p_amount WHERE AccountID = p_to_account;
        COMMIT;
    ELSE
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in source account.');
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Account not found.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
        ROLLBACK;
END;
/

-- Step 2: Call the procedure (transfer ₹100 from Account 1 to 2)
BEGIN
    TransferFunds(1, 2, 100);
END;
/

-- Step 3: View updated Accounts
SELECT * FROM Accounts;
