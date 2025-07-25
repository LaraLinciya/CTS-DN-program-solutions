-- Scenario: Send reminders for loans due within the next 30 days

-- Enable DBMS output (only needed once in a session)
SET SERVEROUTPUT ON;
/

-- Step 1: PL/SQL block to print reminders
BEGIN
    FOR l IN (SELECT * FROM Loans WHERE EndDate <= SYSDATE + 30) LOOP
        DBMS_OUTPUT.PUT_LINE('📢 Reminder: Loan ID ' || l.LoanID ||
                             ' for Customer ID ' || l.CustomerID ||
                             ' is due on ' || TO_CHAR(l.EndDate, 'YYYY-MM-DD'));
    END LOOP;
END;
/
