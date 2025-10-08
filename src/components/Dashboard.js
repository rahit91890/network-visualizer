const React = require('react');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: 'overview'
    };
  }

  render() {
    const { packets, isCapturing, serverConnected } = this.props;

    return React.createElement('div', {
      style: {
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }
    },
      // Header section
      React.createElement('div', {
        style: {
          marginBottom: '24px',
          borderBottom: '2px solid #e0e0e0',
          paddingBottom: '16px'
        }
      },
        React.createElement('h2', {
          style: {
            color: '#1a73e8',
            fontSize: '24px',
            margin: '0 0 8px 0'
          }
        }, 'Dashboard'),
        React.createElement('p', {
          style: {
            color: '#5f6368',
            margin: 0
          }
        }, 'Monitor network traffic in real-time')
      ),

      // Status section
      React.createElement('div', {
        style: {
          marginBottom: '24px'
        }
      },
        React.createElement('h3', {
          style: {
            fontSize: '16px',
            color: '#333',
            marginBottom: '12px'
          }
        }, 'Connection Status'),
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }
        },
          React.createElement('div', {
            style: {
              padding: '12px 16px',
              backgroundColor: serverConnected ? '#e8f5e9' : '#ffebee',
              borderRadius: '4px',
              border: `1px solid ${serverConnected ? '#4caf50' : '#f44336'}`
            }
          },
            React.createElement('strong', null, 'Backend Server: '),
            React.createElement('span', {
              style: {
                color: serverConnected ? '#2e7d32' : '#c62828'
              }
            }, serverConnected ? 'Connected' : 'Disconnected')
          ),
          React.createElement('div', {
            style: {
              padding: '12px 16px',
              backgroundColor: isCapturing ? '#e3f2fd' : '#f5f5f5',
              borderRadius: '4px',
              border: `1px solid ${isCapturing ? '#2196f3' : '#9e9e9e'}`
            }
          },
            React.createElement('strong', null, 'Capture Status: '),
            React.createElement('span', {
              style: {
                color: isCapturing ? '#1565c0' : '#616161'
              }
            }, isCapturing ? 'Active' : 'Inactive')
          )
        )
      ),

      // Packet info section
      React.createElement('div', null,
        React.createElement('h3', {
          style: {
            fontSize: '16px',
            color: '#333',
            marginBottom: '12px'
          }
        }, 'Packet Information'),
        React.createElement('div', {
          style: {
            padding: '16px',
            backgroundColor: '#fafafa',
            borderRadius: '4px',
            border: '1px solid #e0e0e0'
          }
        },
          React.createElement('p', {
            style: {
              margin: '0 0 8px 0',
              color: '#666'
            }
          }, `Total Packets: ${packets.length}`),
          React.createElement('p', {
            style: {
              margin: 0,
              color: '#999',
              fontSize: '14px'
            }
          }, 'Plugin system and packet capture functionality coming soon...')
        )
      )
    );
  }
}

module.exports = Dashboard;
