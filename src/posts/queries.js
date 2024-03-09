const addPost =
  "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *";
const getAll = "SELECT * FROM posts";
const getOne = "SELECT * FROM posts WHERE id = $1";
const update = "UPDATE posts SET title = $1, content = $2 WHERE id = $3";
const deleteOne = "DELETE FROM posts WHERE id = $1";

module.exports = {
  addPost,
  getAll,
  getOne,
  update,
  deleteOne,
};
