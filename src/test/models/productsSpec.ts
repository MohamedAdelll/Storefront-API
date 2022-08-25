/* eslint-disable quotes */
import { Product } from "../../types";
import productsModel from "../../main/models/products.model";

describe("Test Product Model", () => {
  const product: Product = {
    name: "CodeMaster",
    price: 42,
    category: "JavaScript",
  };

  it("should have an index method", () => {
    expect(productsModel.Index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(productsModel.Show).toBeDefined();
  });

  it("should have a add method", () => {
    expect(productsModel.Create).toBeDefined();
  });

  it("should have a delete method", () => {
    expect(productsModel.Delete).toBeDefined();
  });

  it("add method should add a product", async () => {
    const createdProduct: Product = await productsModel.Create(product);
    const createdProductShow: Product = await productsModel.Show(
      createdProduct.id as string
    );

    expect(createdProductShow.id).toBe(createdProduct.id);

    await productsModel.Delete(createdProduct.id as string);
  });

  it("index method should return a list of products", async () => {
    const createdProduct: Product = await productsModel.Create(product);

    expect(createdProduct.category).toEqual(product.category);

    await productsModel.Delete(createdProduct.id as string);
  });

  it("show method should return the correct product", async () => {
    const createdProduct: Product = await productsModel.Create(product);
    const showCreatedProduct = await productsModel.Show(
      createdProduct.id as string
    );

    expect(showCreatedProduct.id).toEqual(createdProduct.id);

    await productsModel.Delete(createdProduct.id as string);
  });

  it("delete method should remove the product", async () => {
    const createdProduct: Product = await productsModel.Create(product);

    await productsModel.Delete(createdProduct.id as string);
    const showCreatedProduct: Product | undefined = await productsModel.Show(
      createdProduct.id as string
    );
    expect(showCreatedProduct).toBeUndefined();
  });
});
