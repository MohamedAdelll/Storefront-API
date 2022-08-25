import supertest from "supertest";
import { genToken } from "../../main/helpers/auth.middleware";
import app from "../../server";

const request = supertest(app);

describe("Middleware testing", () => {
  const token = genToken("id");
  describe("Authorization Test", () => {
    it("should require authorization on every user endpoint", async () => {
      const res = await request.get("/api/v1/users");
      expect(res.status).toBe(401);

      const res1 = await request.get(`/api/v1/users/some_id`);
      expect(res1.status).toBe(401);

      const res2 = await request.delete(`/api/v1/users/some_id`);
      expect(res2.status).toBe(401);
    });
  });

  describe("ValidateID Check Test", () => {
    it("should decline invalid IDs", async () => {
      const res = await request
        .delete(`/api/v1/users/some_id`)
        .set("Authorization", "Bearer " + token);
      expect(res.status).toBe(404);
    });
  });
});
