import { PoolClient } from "pg";
import db from "../../database";
import { Order, ProductInOrder } from "../../types";

class OrderModel {
  async Index(): Promise<Order[]> {
    try {
      const client = await db.connect();
      const sql = `SELECT * FROM store_orders`;
      const result = await db.query(sql);
      client.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Can't get all orders`);
    }
  }

  async Show(o_id: string): Promise<Order> {
    try {
      const client = await db.connect();
      const sql = `SELECT * FROM store_orders WHERE order_id = $1;`;
      const result = await client.query(sql, [o_id]);
      client.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Can't get order with ID=${o_id}`);
    }
  }

  async getActiveOrdersByID(u_id: string): Promise<Order[]> {
    try {
      const client = await db.connect();
      const sql = `SELECT * FROM store_orders WHERE user_idf = $1 AND status = 'active';`;
      const result = await client.query(sql, [u_id]);
      client.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Can't get active orders by user with ID=${u_id}`);
    }
  }

  async getAllOrdersByID(u_id: string): Promise<Order[]> {
    try {
      const client = await db.connect();
      const sql = `SELECT * FROM store_orders WHERE user_idF = $1;`;
      const result = await db.query(sql, [u_id]);
      client.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Can't get active orders by user with ID=${u_id}`);
    }
  }

  async createOrder(order: Order): Promise<Order> {
    try {
      const { products, userID, status } = order;

      if (!products || !userID || !status)
        throw new Error(
          "Some parameters are missing e.g: products, userID or the status!"
        );

      const client = await db.connect();
      const sql = `INSERT INTO store_orders (user_idf,status) values($1,$2) RETURNING *;`;
      const result: Order = await (
        await client.query(sql, [userID, status.toLowerCase()])
      ).rows[0];
      const { order_id } = result;

      const productsArr: ProductInOrder[] = await this._createProductsInOrder(
        client,
        order_id as unknown as string,
        products
      );

      client.release();
      return {
        order_id,
        products: productsArr,
        userID,
        status,
      };
    } catch (error) {
      throw new Error(
        `Can't create order for user with ID=${order.userID} ${error}`
      );
    }
  }

  async changeOrderStatusToComplete(order_id: string): Promise<Order> {
    try {
      const client = await db.connect();

      const result = await client.query(
        `UPDATE store_orders SET status = 'complete' WHERE order_id=$1 RETURNING *;`,
        [order_id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Can't change status of order with ID=${order_id} ${error}`
      );
    }
  }

  async _createProductsInOrder(
    client: PoolClient,
    order_id: string,
    products: ProductInOrder[]
  ): Promise<ProductInOrder[]> {
    const productsArr: ProductInOrder[] = [];

    for (const prodObj of products) {
      const sql = `INSERT INTO order_products (order_idf,product_idf,product_quantity) values($1,$2,$3) RETURNING product_idf,product_quantity;`;
      const product: ProductInOrder = await (
        await client.query(sql, [order_id, prodObj.productID, prodObj.quantity])
      ).rows[0];

      productsArr.push(product);
    }
    return productsArr;
  }

  async deleteOrder(id: string) {
    try {
      const client = await db.connect();
      await client.query(`DELETE FROM order_products WHERE order_idf='${id}';`);
      await client.query(`DELETE FROM store_orders WHERE order_id='${id}';`);
      client.release();
      return [];
    } catch (error) {
      throw new Error(`Cannot delete user with ID ${id}`);
    }
  }
}

export default new OrderModel();
