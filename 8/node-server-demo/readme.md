node-server-demo/
│
├── server.js       // HTTP server setup
├── osInfo.js       // System info using 'os'
├── pathDemo.js     // File path operations using 'path'
├── eventDemo.js    // Custom events with 'events'
├── README.md       // Documentation

Core Modules Used
http – Creates the web server

os – Retrieves system info like CPU, memory, and uptime

path – Handles file/directory path operations

events – Implements event-driven behavior

Setup & Execution
Requirements:

Node.js installed

VS Code or any IDE

Steps to Run:

Open terminal and go to the project folder:


cd node-server-demo
Launch project in VS Code:


Run files individually:

Start server: node server.js → visit http://localhost:3000

OS info: node osInfo.js

Path demo: node pathDemo.js

Events demo: node eventDemo.js

Sample Outputs
server.js → “Hello from Node.js custom server!” in browser

osInfo.js → Displays platform, memory, uptime, user info

pathDemo.js → Shows file name, extension, directory, joined path

eventDemo.js → Emits and logs a custom message like “Hello, Alice!”