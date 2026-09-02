const pool = require("../config/db");
 
 
 
const bookTicket = async (req, res) => {
  try {
    const { user_id, ticket_type, visit_date, quantity, total_price } =
      req.body;

    if (!user_id || !ticket_type || !visit_date || !quantity || !total_price) {
      return res
        .status(400)
        .json({
          error:
            "user_id, ticket_type, visit_date, quantity, total_price are required",
        });
    }

    const [result] = await pool.query(
      `INSERT INTO tickets (user_id, ticket_type, visit_date, quantity, total_price)
             VALUES (?, ?, ?, ?, ?)`,
      [user_id, ticket_type, visit_date, quantity, total_price],
    );

    res
      .status(201)
      .json({
        id: result.insertId,
        user_id,
        ticket_type,
        visit_date,
        quantity,
        total_price,
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


const getAllTickets = async (req, res) => {
  const [rows] = await pool.query(
    `SELECT t.*, u.full_name, u.email
         FROM tickets t
         JOIN users u ON u.id = t.user_id
         ORDER BY t.created_at DESC`,
  );
  res.json(rows);
};


const getATicket = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tickets WHERE user_id = ?", [
    req.params.user_id,
  ]);
  res.json(rows);
};

const updateATicket = async (req, res) => {
  const { status } = req.body;
  if (!status) return res.status(400).json({ error: "status is required" });

  await pool.query("UPDATE tickets SET status = ? WHERE id = ?", [
    status,
    req.params.id,
  ]);
  res.json({ id: req.params.id, status });
};


const deleteATicket = async (req, res) => {
  await pool.query("DELETE FROM tickets WHERE id = ?", [req.params.id]);
  res.json({ message: "Ticket deleted" });
};
module.exports = {
  bookTicket,
  getAllTickets,
  getATicket,
  updateATicket,
  deleteATicket,
};