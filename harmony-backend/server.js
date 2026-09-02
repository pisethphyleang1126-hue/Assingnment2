require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/user-route');
const ticketsRouter = require('./routes/ticket-route');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Harmony Museum API is running' });
});

app.use('/api/users', usersRouter);
app.use('/api/tickets', ticketsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
