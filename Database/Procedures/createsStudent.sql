CREATE OR ALTER PROCEDURE createStudentPROC(@id VARCHAR(200), @student_name  VARCHAR(500), @class VARCHAR(1000), @fee INT)
AS
BEGIN
    INSERT INTO studentsTable(id, student_name, class, fee) VALUES (@id, @student_name, @class, @fee)
END
GO

USE studentFee
GO