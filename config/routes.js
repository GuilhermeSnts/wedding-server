module.exports = (app) => {
  app.route("/api/v1/subscribe").get(app.sse.init);

  app
    .route("/api/v1/users")
    .post(app.api.users.create)
    .get(app.api.users.listAll);
  app.route("/api/v1/user/:id").get(app.api.users.getById);
};
