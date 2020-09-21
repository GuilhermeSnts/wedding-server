module.exports = (app) => {
  const create = async (req, res) => {
    try {
      const user = await app.repository.user.create(req.body);

      app.sse.send(user, "user_created");
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const update = async (req, res) => {
    try {
      const user = await app.repository.users.update(req.params.id, req.body);

      app.sse.send(user, "user_updated");
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const listAll = async (req, res) => {
    try {
      const users = await app.repository.users.listAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  const getById = async (req, res) => {
    try {
      const user = await app.repository.users.getById();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  return { create, update, listAll, getById };
};
