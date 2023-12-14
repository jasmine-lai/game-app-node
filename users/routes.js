import * as dao from "./dao.js";

let currentUser = null;

function UserRoutes(app) {
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    console.log(req.body);
    const status = await dao.updateUser(userId, req.body);
    res.json(status);
  };

  const findUserByUsername = async (req, res) => {
    const user = await dao.findUserByUsername(req.params.username);
    res.json(user);
  };

  const findUserByUsernameId = async (req, res) => {
    const user = await dao.findUserByUsernameId(req.params.username);
    console.log(req.params.username);
    console.log(user);
    res.json(user);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.sendStatus(403);
    } else {
      currentUser = await dao.createUser(req.body);
      res.json(currentUser);
    }
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await dao.findUserByCredentials(username, password);
    if (user) {
      currentUser = user;
      res.json(currentUser);
    } else {
      res.sendStatus(403);
    }
  };

  const signout = (req, res) => {
    currentUser = null;
    res.json(200);
  };

  const account = async (req, res) => {
    res.json(currentUser);
  };

  app.get("/api/users", findAllUsers);
  app.get("/api/users/s/:username", findUserByUsername);
  app.get("/api/users/:username", findUserByUsernameId);
  app.post("/api/users", createUser);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);

  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}

export default UserRoutes;
