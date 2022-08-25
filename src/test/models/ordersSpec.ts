import { User, Product, ProductInOrder, Order } from "../../types";
import ordersModel from "../../main/models/orders.model";
import productsModel from "../../main/models/products.model";
import userModel from "../../main/models/users.model";

describe("Order Model", () => {
  let order: Order, userID: string, productID: string;

  beforeAll(async () => {
    const newUser: User = {
      username: "hansmeier",
      fName: "Hans",
      lName: "Meier",
      password: "password123",
    };

    const user: User = await userModel.Create(newUser);
    userID = user.id as unknown as string;

    const product: Product = await productsModel.Create({
      name: "OrderSpec Product",
      price: 299,
      category: "JavaScript",
    });
    const { id } = product;
    productID = id as string;
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
  });

  it("should have an index method", () => {
    expect(ordersModel.Index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(ordersModel.Show).toBeDefined();
  });

  it("should have a getAllOrdersByID method", () => {
    expect(ordersModel.getAllOrdersByID).toBeDefined();
  });

  it("should have a changeOrderStatus method", () => {
    expect(ordersModel.changeOrderStatusToComplete).toBeDefined();
  });

  it("should have a getActiveOrdersByID method", () => {
    expect(ordersModel.getActiveOrdersByID).toBeDefined();
  });

  it("should have a create method", () => {
    expect(ordersModel.createOrder).toBeDefined();
  });

  it("add method should add a order", async () => {
    const createdOrder: Order = await ordersModel.createOrder(order);
    const showCreatedOrder: Order = await ordersModel.Show(
      createdOrder.order_id as string
    );
    expect(showCreatedOrder).toBeDefined();

    await ordersModel.deleteOrder(createdOrder.order_id as string);
  });

  it("index method should return a list of orders", async () => {
    const createdOrder: Order = await ordersModel.createOrder(order);
    const showCreatedOrder: Order = await ordersModel.Show(
      createdOrder.order_id as string
    );
    const orderList = await ordersModel.Index();
    expect(orderList[orderList.length - 1]).toEqual(showCreatedOrder);

    await ordersModel.deleteOrder(createdOrder.order_id as string);
  });

  it("show method should return the correct orders", async () => {
    const createdOrder: Order = await ordersModel.createOrder(order);
    const orderFromDb = await ordersModel.Show(createdOrder.order_id as string);
    expect(orderFromDb.order_id).toEqual(createdOrder.order_id);

    await ordersModel.deleteOrder(createdOrder.order_id as string);
  });
});
