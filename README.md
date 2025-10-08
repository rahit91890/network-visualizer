# Network Visualizer

A cross-platform network packet analyzer with real-time visualization built with Electron, React, and Express.js.

## Project Structure

```
network-visualizer/
├── src/
│   ├── main.js              # Electron main process
│   ├── index.html           # HTML entry point
│   ├── App.js               # Main React application
│   └── components/
│       └── Dashboard.js     # Dashboard component
├── server/
│   └── index.js             # Express.js backend API
├── package.json             # Project dependencies and scripts
├── README.md
└── LICENSE
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) and npm
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahit91890/network-visualizer.git
   cd network-visualizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

### Development Mode

To run the application in development mode:

1. **Start the backend server** (in one terminal):
   ```bash
   npm run server
   ```

2. **Start the Electron app** (in another terminal):
   ```bash
   npm start
   ```

   Or run both concurrently:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm start` - Start the Electron application
- `npm run server` - Start the Express.js backend server
- `npm run dev` - Run both backend and Electron app concurrently
- `npm run build` - Build the application for production
- `npm run package` - Package the application for distribution

## Backend API Endpoints

The Express.js server runs on `http://localhost:3001` and provides the following endpoints:

### Status Endpoints
- `GET /api/status` - Check server status
- `GET /api/capture/status` - Get packet capture status

### Plugin Endpoints (Placeholder)
- `GET /api/plugins` - List available plugins
- `POST /api/plugins/load` - Load a plugin

### Packet Capture Endpoints (Placeholder)
- `POST /api/capture/start` - Start packet capture
- `POST /api/capture/stop` - Stop packet capture
- `GET /api/packets` - Get captured packets

*Note: Plugin and packet capture functionality are placeholders for future implementation.*

## Architecture Overview

### Frontend (Electron + React)
- **Electron**: Provides the desktop application framework
- **React**: Handles the UI components and state management
- **Components**:
  - `App.js`: Main application component with server connection logic
  - `Dashboard.js`: Displays network status and packet information

### Backend (Express.js)
- **Express.js**: RESTful API server for handling network operations
- **CORS enabled**: Allows frontend to communicate with backend
- **Port**: 3001 (configurable in `server/index.js`)

## Configuration

### Electron Configuration
The Electron configuration is managed through Electron Forge in `package.json`. Key settings:
- **Main entry**: `src/main.js`
- **Makers**: Configured for Windows (Squirrel), macOS (ZIP), and Linux (DEB/RPM)
- **Plugins**: Auto-unpack natives and security fuses

### Backend Configuration
The backend server configuration can be found in `server/index.js`:
- Default port: 3001
- CORS: Enabled for all origins (configure for production)

## Building for Production

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Package for distribution**:
   ```bash
   npm run package
   ```

Built applications will be in the `out/` directory.

## Platform-Specific Notes

### Windows
- Built packages use Squirrel installer
- Administrator privileges may be required for network capture (future implementation)

### macOS
- Built packages are ZIP archives
- Code signing may be required for distribution

### Linux
- DEB and RPM packages are created
- Network capabilities may need to be set for packet capture (future implementation)

## Roadmap

This is the initial boilerplate setup. Future enhancements include:

- [ ] Implement actual packet capture using pcap libraries
- [ ] Add real-time network visualization
- [ ] Implement plugin architecture
- [ ] Add protocol analysis features
- [ ] Create network topology maps
- [ ] Implement alert system
- [ ] Add data export functionality
- [ ] Build comprehensive test suite

## Development Workflow

1. Make changes to the code
2. Test locally using `npm run dev`
3. Commit changes to the main branch
4. Build and test production package before distribution

## Troubleshooting

### Backend server not connecting
- Ensure the server is running on port 3001
- Check for port conflicts
- Verify firewall settings

### Electron app not starting
- Ensure all dependencies are installed (`npm install`)
- Check that `src/main.js` exists
- Review console for errors

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions:
- Open an issue on [GitHub Issues](https://github.com/rahit91890/network-visualizer/issues)
- Check existing issues for solutions

---

**Current Status**: Boilerplate setup complete. The application includes a basic Electron + React frontend with an Express.js backend. Core network analysis features are in development.
