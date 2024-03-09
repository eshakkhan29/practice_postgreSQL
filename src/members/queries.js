const getAllMembers = "SELECT * FROM members";
const getById = "SELECT * FROM members WHERE user_id = $1";
const deleteMembers = "DELETE FROM members WHERE user_id = $1";
const update =
  "UPDATE members SET username = $1, first_name = $2, last_name = $3, email = $4 WHERE user_id = $5";

module.exports = {
  getAllMembers,
  getById,
  deleteMembers,
  update,
};
