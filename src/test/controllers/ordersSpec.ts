import supertest from "supertest";
import { genToken } from "../../main/helpers/auth.middleware";
import ordersModel from "../../main/models/orders.model";
import app from "../../server";
import { Order, Product, User } from "../../types";

const request = supertest(app);

describe("Test Orders Controller", () => {
  let token: string,
    order: Order,
    userID: string,
    productID: string,
    order_id: string;

  beforeAll(async () => {
    const newUser: User = {
      username: "newUsername1",
      fName: "Orderr",
      lName: "Testerr",
      password: "password123456",
    };
    const productData: Product = {
      name: "CodeTester",
      price: 19,
      category: "Test category",
    };
    token = genToken(newUser.username);
    const { body: userBody } = await request
      .post("/api/v1/users")
      .set("Authorization", "Bearer " + token)
      .send({ newUser });
    userID = userBody.data.id;
    const { body: productBody } = await request
      .post("/api/v1/products")
      .set("Authorization", "Bearer " + token)
      .send(productData);
    productID = productBody.data.id;

    order = {
      products: [
        {
          productID,
          quantity: 5,
        },
      ],
      userID,
      status: "active",
    };
    const res = await request
      .post("/api/v1/orders/order/")
      .send({ order })
      .set("Authorization", "Bearer " + token);
    const { body } = res;
    order_id = body.data.order_id;
  });

  it("GET // Gets all orders", async () => {
    const res = await request
      .get("/api/v1/orders/")
      .set("Authorization", "Bearer " + token);

    expect(res.status).toBe(200);
  });

  it("PUT // Changes order status to Complete ", async () => {
    const res = await request
      .put(`/api/v1/orders/order/${order_id}`)
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });

  it("GET // Gets all orders by user ID", async () => {
    const res = await request
      .get(`/api/v1/orders/all/${userID}`)
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });

  it("GET // Gets active orders by user ID", async () => {
    const res = await request
      .get(`/api/v1/orders/active/${userID}`)
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });
  afterAll(async () => {
    await ordersModel.deleteOrder(order_id);
  });
});
