USE studentFee
GO

CREATE OR ALTER PROCEDURE getAllStudents
AS
BEGIN SELECT * FROM studentsTable
END
GO


SELECT * FROM studentsTable