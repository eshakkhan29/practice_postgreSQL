const pool = require("../../utils/db");
const { getAll, addPost, getOne, update, deleteOne } = require("./queries");
// create a new post
const createPost = (req, res) => {
  const { title, content } = req.body;
  pool.query(addPost, [title, content], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send({ message: "Post created successfully!" });
  });
};
// get all posts
const getPosts = (req, res) => {
  pool.query(getAll, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// get a single post
const getPost = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getOne, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// update a post
const updatePost = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  pool.query(update, [title, content, id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send({ message: "Post updated successfully!" });
  });
};
// delete a post
const deletePost = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(deleteOne, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send({ message: "Post deleted successfully!" });
  });
};
module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
