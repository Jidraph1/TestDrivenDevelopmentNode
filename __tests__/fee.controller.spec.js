import request from "supertest";
import app from "../server";

describe("Student fee balance", () => {
    it('should create a new student and a balance',async () => {
        expect(res.json).toHaveBeenCalledWith({
            message: 'Student was Created Successfully'
        })
    })


  it("should get all students", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.body.todos).toBeInstanceOf(Array);
  });

  it("should get a single studet by ID", async () => {
    // const res =await request(app).get("/1");

    expect(res.statusCode).toBe(200);
    expect(res.body.student).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        student_name: expect.any(String),
        class: expect.any(String),
        fee: expect.any(Number),
      })
    );
  });
});
