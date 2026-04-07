const { createClient } = require('redis');
const subscriber = createClient();
async function startSubscriber() {
await subscriber.connect();
 await subscriber.subscribe('news', (message) => {
console.log('Received:', message);
});
}
startSubscriber();