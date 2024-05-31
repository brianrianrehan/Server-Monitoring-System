```markdown
# Server Monitoring System

Server Monitoring System is a simple application that monitors server system information in real-time using Node.js, Express, WebSocket, and Systeminformation.

This application gathers information such as CPU usage, RAM usage, disk usage, and network information from the server and sends it to the client over a WebSocket connection. The client then displays this information in a user-friendly interface.

## Features

- Monitors CPU, RAM, disk usage, and network information in real-time.
- Displays detailed system information such as OS distribution, total and used RAM and disk space.
- Provides notifications if CPU usage reaches a certain threshold.

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/brianrianrehan/systeminformationserver.git
   ```

2. **Install Dependencies**
   ```sh
   cd server-monitoring
   npm install
   ```

3. **Run the Server**
   ```sh
   npm start
   ```

4. **Open the Application**
   Open `http://localhost:3000` in your browser.

## Usage

After running the application, you can open `http://localhost:3000` in your browser to view the application's user interface. The system information will be automatically updated in the user interface based on the information received from the server.

## Contribution

We welcome contributions from the community! To contribute, follow these steps:

1. Fork the project
2. Create a new feature or fix a bug (use the `develop` branch)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin develop`)
5. Create a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact


Project Link: [https://github.com/brianrianrehan/systeminformationserver](https://github.com/username/server-monitoring)
```
