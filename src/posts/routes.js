const { Router } = require("express");
const controller = require("./controller");
const routes = Router();

// crete a new post
routes.post("/", controller.createPost);
// get all posts
routes.get("/", controller.getPosts);
// get a single post
routes.get("/:id", controller.getPost);
// update a post
routes.put("/:id", controller.updatePost);
// delete a post
routes.delete("/:id", controller.deletePost);

module.exports = routes;
