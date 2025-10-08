const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes

// Status endpoint - Check if server is running
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Network Visualizer API Server is running',
    timestamp: new Date().toISOString()
  });
});

// Plugin management endpoints (placeholder for future implementation)
app.get('/api/plugins', (req, res) => {
  res.json({
    plugins: [],
    message: 'Plugin system coming soon'
  });
});

app.post('/api/plugins/load', (req, res) => {
  const { pluginName } = req.body;
  res.json({
    success: false,
    message: `Plugin loading not yet implemented: ${pluginName}`
  });
});

// Packet capture endpoints (placeholder for future implementation)
app.get('/api/capture/status', (req, res) => {
  res.json({
    isCapturing: false,
    packetsCount: 0,
    message: 'Packet capture not yet implemented'
  });
});

app.post('/api/capture/start', (req, res) => {
  res.json({
    success: false,
    message: 'Packet capture start not yet implemented'
  });
});

app.post('/api/capture/stop', (req, res) => {
  res.json({
    success: false,
    message: 'Packet capture stop not yet implemented'
  });
});

// Get captured packets (placeholder)
app.get('/api/packets', (req, res) => {
  res.json({
    packets: [],
    total: 0,
    message: 'Packet capture not yet implemented'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Network Visualizer API Server running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET  /api/status');
  console.log('  GET  /api/plugins');
  console.log('  POST /api/plugins/load');
  console.log('  GET  /api/capture/status');
  console.log('  POST /api/capture/start');
  console.log('  POST /api/capture/stop');
  console.log('  GET  /api/packets');
});
