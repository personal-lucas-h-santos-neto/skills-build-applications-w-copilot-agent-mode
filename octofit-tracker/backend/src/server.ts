import express from 'express';

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker Backend is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`OctoFit Tracker Backend running on http://localhost:${PORT}`);
});
