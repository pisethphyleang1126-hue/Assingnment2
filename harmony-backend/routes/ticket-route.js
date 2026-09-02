const express = require("express");
const router = express.Router();

const {
  bookTicket,
  getAllTickets,
  getATicket,
  updateATicket,
  deleteATicket,
} = require("../controller/ticket-controller");

// POST /api/tickets  -> create a booking
router.post("/book/ticket", bookTicket);

// GET /api/tickets  -> all tickets
router.get("/get/all/users/tickets", getAllTickets);

// GET /api/tickets/user/:user_id  -> a specific user's tickets
router.get("/get/a/user/ticket/:user_id", getATicket);

// PUT /api/tickets/:id  -> update status (e.g. cancel)
router.put("/update/a/user/:id", updateATicket);

// DELETE /api/tickets/:id
router.delete("/delete/a/user/ticket/:id", deleteATicket);

module.exports = router;
