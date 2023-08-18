USE studentFee


BEGIN 
    TRY
        CREATE TABLE studentsTable(
            id VARCHAR(200) PRIMARY KEY,
            student_name VARCHAR(500) NOT NULL,
            class VARCHAR(1000) NOT NULL,
            fee INT NOT NULL,)
    END TRY
BEGIN   
    CATCH
        THROW 50001, 'Table already Exists!', 1;
    END CATCH

DROP TABLE studentsTable;


-- ALTER TABLE studentsTable
-- ALTER COLUMN fee SET INT;