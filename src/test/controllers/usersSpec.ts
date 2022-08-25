import supertest from "supertest";
import { genToken } from "../../main/helpers/auth.middleware";
import app from "../../server";
import { User } from "../../types";

const request = supertest(app);

describe("Test User Controller", async () => {
  const newUser: User = {
    username: "newUsername",
    fName: "Mohamed",
    lName: "Adel",
    password: "password123",
  };

  const token: string = genToken(newUser.username);
  let userId: string;

  beforeAll(async () => {
    const postRes = await request
      .post("/api/v1/users")
      .set("Authorization", "Bearer " + token)
      .send({ newUser });
    userId = postRes.body.data.id;
  });

  it("POST // Creates new user", async () => {
    const newUser: User = {
      username: "lost_rest132",
      fName: "Mo",
      lName: "Adel",
      password: "password123",
    };

    const postRes = await request
      .post("/api/v1/users")
      .set("Authorization", "Bearer " + token)
      .send({ newUser });

    const { status } = postRes;
    expect(status).toBe(200);
    await request
      .delete(`/api/v1/users/${postRes.body.data.id}`)
      .set("Authorization", "Bearer " + token);
  });

  // it("POST // Gets the auth endpoint", async () => {
  //   const res = await request
  //     .post("/api/v1/users/auth")
  //     .send({
  //       username: newUser.username,
  //       password: newUser.password,
  //     })
  //     .set("Authorization", "bearer " + token);
  //   expect(res.status).toBe(200);
  // });

  it("GET // Gets all users", async () => {
    const res = await request
      .get("/api/v1/users")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });

  it("GET // Gets user by ID", async () => {
    const res = await request
      .get(`/api/v1/users/${userId}`)
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });

  it("DELETE // Deletes a user by ID", async () => {
    const newUser: User = {
      username: "vveesst1",
      fName: "Mohamed",
      lName: "Adel",
      password: "password123",
    };
    const postRes = await request
      .post("/api/v1/users")
      .set("Authorization", "Bearer " + token)
      .send({ newUser });
    const userId = postRes.body.data.id;
    const res = await request
      .delete(`/api/v1/users/${userId}`)
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });
});
