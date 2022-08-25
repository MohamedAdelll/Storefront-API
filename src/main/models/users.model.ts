import db from "../../database";
import { User } from "../../types";
import * as bcrypt from "bcrypt";
import { PEPPER as pepper, SALT_ROUNDS as saltRounds } from "../../config";

class UserModel {
  async Index(): Promise<User[]> {
    try {
      const client = await db.connect();
      const result = await client.query(
        `SELECT ID, username ,f_name as fName,l_name as lName FROM store_users;`
      );
      client.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot retreive users data ${error}`);
    }
  }

  async Show(id: string): Promise<User> {
    try {
      const client = await db.connect();
      const result = await client.query(
        `SELECT ID,username, f_name as fName,l_name as lName FROM store_users WHERE ID=$1;`,
        [id]
      );
      client.release();
      // if (!result.rows.length) throw new Error();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot get user with ID:${id}`);
    }
  }

  async Create(u: User): Promise<User> {
    try {
      const hash = await bcrypt.hash(
        pepper + u.password,
        +(saltRounds as unknown as string)
      );
      const client = await db.connect();
      const sql = `INSERT INTO store_users (f_name,l_name,u_password,username) VALUES ('${u.fName}','${u.lName}','${hash}','${u.username}') returning id,username,f_name as fName, l_name as lName;`;
      const result = await client.query(sql);
      client.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Cannot create new user with name ${u.fName}`);
    }
  }

  async Delete(id: string) {
    try {
      const client = await db.connect();
      await client.query(`DELETE FROM store_users WHERE id='${id}'`);
      client.release();
    } catch (error) {
      throw new Error(`Cannot delete user with ID ${id}`);
    }
  }
  async authenticate(username: string, password: string): Promise<User | null> {
    try {
      const client = await db.connect();
      const sql = "SELECT * FROM store_users WHERE username=($1)";
      const { rows } = await client.query(sql, [username]);
      client.release();

      if (!rows.length) return null;

      const user = rows[0];
      if (bcrypt.compareSync(password + pepper, user.u_password)) return user;

      return null;
    } catch (err) {
      throw new Error(`Could not find user ${username}. ${err}`);
    }
  }
}

export default new UserModel();
