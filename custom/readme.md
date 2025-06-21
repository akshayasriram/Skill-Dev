## Observation

In this experiment, a custom HTTP server was successfully created using Node.js without any external frameworks like Express. The built-in `http` module was used to handle incoming requests and serve files such as HTML and CSS.

Additionally, the experiment involved the use of the following Node.js core modules:

- **`fs` (File System)**: To read and serve static files.
- **`path`**: To handle file paths dynamically and ensure cross-platform compatibility.
- **`os`**: To retrieve system information like platform, memory, CPU cores, etc.
- **`events`**: To create and handle custom events triggered when a page is served.

The server listens on port 3000 and serves a static HTML page and CSS file. When accessed through a browser, the server logs useful system info and emits an event indicating which page was served. This demonstrates how Node.js can be used to build low-level servers and work with asynchronous event-driven programming.

This experiment provided hands-on experience with core Node.js modules and improved understanding of how to manually handle routing, file reading, and event handling in a backend application.
![alt text](<Screenshot (38).png>)