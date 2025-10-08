const React = require('react');
const Dashboard = require('./components/Dashboard.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      packets: [],
      isCapturing: false,
      serverConnected: false
    };
  }

  componentDidMount() {
    // Connect to backend server on port 3001
    fetch('http://localhost:3001/api/status')
      .then(res => res.json())
      .then(data => {
        this.setState({ serverConnected: true });
      })
      .catch(err => {
        console.log('Backend server not running');
      });
  }

  render() {
    return React.createElement('div', {
      style: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh'
      }
    },
      React.createElement('h1', {
        style: {
          color: '#333',
          marginBottom: '20px'
        }
      }, 'Network Visualizer'),
      React.createElement(Dashboard, {
        packets: this.state.packets,
        isCapturing: this.state.isCapturing,
        serverConnected: this.state.serverConnected
      })
    );
  }
}

module.exports = App;
