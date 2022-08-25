import usersModel from "../../main/models/users.model";
import { User } from "../../types";

describe("Test User Model", () => {
  const user: User = {
    username: "MoAdelTest",
    fName: "Momo",
    lName: "Adel",
    password: "password123",
  };

  it("should have an index method", () => {
    expect(usersModel.Index).toBeDefined();
  });

  it("should have a show method", () => {
    expect(usersModel.Show).toBeDefined();
  });

  it("should have a create method", () => {
    expect(usersModel.Create).toBeDefined();
  });

  it("should have a remove method", () => {
    expect(usersModel.Delete).toBeDefined();
  });

  it("create method should create a user", async () => {
    const createdUser: User = await usersModel.Create(user);
    if (createdUser) {
      const { username, fname, lname } = createdUser;

      expect(username).toBe(user.username);
      expect(fname).toBe(user.fName);
      expect(lname).toBe(user.lName);
    }

    await usersModel.Delete(createdUser.id as string);
  });

  it("index method should return a list of users", async () => {
    const createdUser: User = await usersModel.Create(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userList = await usersModel.Index();
    expect(createdUser.fname).toEqual(user.fName);

    await usersModel.Delete(createdUser.id as string);
  });

  it("show method should return the correct users", async () => {
    const createdUser: User = await usersModel.Create(user);
    const userFromDb = await usersModel.Show(createdUser.id as string);

    expect(userFromDb).toEqual(createdUser);

    await usersModel.Delete(createdUser.id as string);
  });

  it("remove method should remove the user", async () => {
    const createdUser: User = await usersModel.Create(user);

    await usersModel.Delete(createdUser.id as string);

    const showDeletedUser = await usersModel.Show(createdUser.id as string);

    expect(showDeletedUser).toBeUndefined();
  });
});
