const { createClient } = require('redis');
const publisher = createClient();
async function startPublisher() {
    await publisher.connect();
    let count = 1;
    setInterval(async () => {
        const message = `Message ${count++}`;
        await publisher.publish('news', message);
        console.log('Published:', message);
    }, 2000);
}
startPublisher();

//Redis Installation 
// ✅ 2. Install dependency
// npm install redis
// 🚨 3. MOST IMPORTANT → Start Redis server

// Your code will fail if Redis is not running.

// ▶️ On Fedora:
// sudo dnf install redis  for ubuntu sudo apt install redis

// sudo systemctl start redis

// Check:

// redis-cli ping

// Expected:

// PONG