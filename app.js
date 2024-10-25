const express = require('express');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(express.json());

app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
server.on('error', (error) => {
  console.error('Server error:', error);
});