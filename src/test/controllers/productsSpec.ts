import supertest from "supertest";
import { genToken } from "../../main/helpers/auth.middleware";
import app from "../../server";
import { Product } from "../../types";

const request = supertest(app);

describe("Test Products Controller", () => {
  const product: Product = {
    name: "CodeMaster 3000",
    price: 999,
    category: "JavaScript",
  };

  let token: string, userID: string, product_id: string;

  beforeAll(async () => {
    token = genToken(product.name);
    const res = await request
      .post("/api/v1/products")
      .send(product)
      .set("Authorization", "Bearer " + token);

    const newProduct = res.body;

    product_id = newProduct.data.id;
  });

  it("GET // Gets all products", async () => {
    const res = await request
      .get("/api/v1/products")
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });

  it("GET // Gets a product by id", async () => {
    const res = await request
      .get(`/api/v1/products/${product_id}`)
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });

  it("GET // Gets product by category", async () => {
    const res = await request
      .get(`/api/v1/products/category/${product.category}`)
      .set("Authorization", "Bearer " + token);

    expect(res.status).toBe(200);
  });

  it("DELETE // Deletes a product by id", async () => {
    const res = await request
      .post("/api/v1/products")
      .send(product)
      .set("Authorization", "Bearer " + token);

    const newProduct = res.body;

    const product_id = newProduct.data.id;

    const res1 = await request
      .delete(`/api/v1/products/${product_id}`)
      .set("Authorization", "Bearer " + token);

    expect(res1.status).toBe(200);
  });
});
