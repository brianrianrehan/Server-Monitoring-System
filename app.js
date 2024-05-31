const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const si = require('systeminformation');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const port = 3000;

wss.on('connection', ws => {
    console.log('Client connected');

    const sendSystemInfo = async () => {
        try {
            const cpu = await si.cpu(); // Mengambil informasi CPU
            const currentLoad = await si.currentLoad(); // Mengambil informasi penggunaan CPU saat ini
            const mem = await si.mem();
            const os = await si.osInfo();
            const disk = await si.fsSize();
            const network = await si.networkInterfaces();
            const time = await si.time();

            const totalDiskUsed = disk.reduce((acc, d) => acc + d.used, 0);
            const totalDiskSize = disk.reduce((acc, d) => acc + d.size, 0);

            // Menentukan apakah CPU penuh berdasarkan persentase penggunaan
            const isCpuFull = currentLoad.currentLoad >= 90; // Anda dapat menyesuaikan threshold sesuai kebutuhan
            
            ws.send(JSON.stringify({
                cpu,
                currentLoad,
                memory: {
                    total: mem.total,
                    free: mem.free,
                    used: mem.used,
                    active: mem.active,
                    available: mem.available
                },
                os: {
                    distro: os.distro,
                    release: os.release,
                    uptime: time.uptime
                },
                disk: {
                    totalUsed: totalDiskUsed,
                    totalSize: totalDiskSize
                },
                network,
                isCpuFull // Mengirimkan informasi apakah CPU penuh ke klien
            }));
        } catch (error) {
            console.error('Error retrieving system information:', error);
        }
    };

    const intervalId = setInterval(sendSystemInfo, 5000); // Mengirim info setiap 1 detik

    ws.on('close', () => {
        clearInterval(intervalId);
        console.log('Client disconnected');
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
