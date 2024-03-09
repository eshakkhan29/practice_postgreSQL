const { Router } = require("express");
const router = Router();
const controller = require("./controller");
// get all members
router.get("/", controller.getMembers);
// get member by id
router.get("/:id", controller.getMemberById);
// delete a member
router.delete("/:id", controller.deleteMember);
// update a member
router.put("/:id", controller.updateMember);

// export the router
module.exports = router;
