import db from "../../database";
import { Product } from "../../types";

class ProductModel {
  async Index(): Promise<Product[]> {
    try {
      const client = await db.connect();
      const result = await client.query(
        `SELECT product_id as id, name, price, category FROM store_products;`
      );
      client.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Couldn't retreive products`);
    }
  }

  async Show(id: string): Promise<Product> {
    try {
      const client = await db.connect();
      const result = await client.query(
        `Select product_id as id, name, price, category FROM store_products WHERE product_id='${id}';`
      );
      client.release();
      // if (!result.rows.length) throw new Error("No products with this ID");
      return result.rows[0];
    } catch (error) {
      throw new Error(`Couldn't show product with ID=${id} ${error}`);
    }
  }
  async Create(p: Product): Promise<Product> {
    try {
      const client = await db.connect();
      const result = await client.query(
        `INSERT INTO store_products (name, price, category) values($1,$2,$3) returning name, price, category,product_id AS id; `,
        [p.name, p.price, p.category]
      );
      client.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Couldn't create product with name=${p.name}`);
    }
  }
  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const client = await db.connect();
      const result = await client.query(
        `SELECT * FROM store_products WHERE category=$1; `,
        [category]
      );
      client.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Can't get products from category = ${category}`);
    }
  }
  async Delete(id: string) {
    try {
      const client = await db.connect();
      const sql = `DELETE FROM store_products WHERE product_id='${id}'`;
      await client.query(sql);
      client.release();
    } catch (error) {
      throw new Error(`Cannot delete product with ID ${id}`);
    }
  }
}

export default new ProductModel();
