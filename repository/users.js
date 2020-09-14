module.exports = (app) => {
  const create = async (data) => {
    return app
      .db("users")
      .insert(data)
      .returning("*")
      .catch((err) => err);
  };

  const update = async (id, data) => {
    return app
      .db("users")
      .update(data)
      .where(id)
      .returning("*")
      .catch((err) => err);
  };

  const list = async () => {
    return app.db("users").catch((err) => err);
  };

  return { create, update, list };
};
