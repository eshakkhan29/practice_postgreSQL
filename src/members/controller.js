const pool = require("../../utils/db");
const { getAllMembers, getById, deleteMembers, update } = require("./queries");
// get all members
const getMembers = async (req, res) => {
  pool.query(getAllMembers, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// get member by id
const getMemberById = (req, res) => {
  const id = req?.params?.id;
  pool.query(getById, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
// delete a member
const deleteMember = (req, res) => {
  const id = req?.params?.id;
  pool.query(deleteMembers, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Member deleted with ID: ${id}`);
  });
};
// update a member
const updateMember = (req, res) => {
  const id = req?.params?.id;
  let bodyArray = Object.values(req.body);
  bodyArray.push(id);
  console.log("bodyArray", bodyArray);
  pool.query(update, bodyArray, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Member modified with ID: ${id}`);
  });
};

// export the module
module.exports = {
  getMembers,
  getMemberById,
  deleteMember,
  updateMember,
};
