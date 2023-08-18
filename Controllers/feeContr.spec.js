import mssql from "mssql";
import { createStudent, getStudent } from "./feeController";

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Gets all Students", () => {
  it("should return all Students", async () => {
    const mockStudents = [
      {
        student_name: "Dan Kagwa",
        class: "form four",
        fee: "20,000",
      },
    ];

    const req = {};

    jest.spyOn(mssql, "connect").mockResolvedValueOnce({
      request: jest.fn().mockReturnThis(),
      execute: jest.fn().mockResolvedValueOnce({
        recordset: mockStudents,
      }),
    });

    await getProjects(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ projects: mockProjects });
  });
});
