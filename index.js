const server = require('./api/server.js');

const port = process.env.PORT || 9090;

console.log("this is working");
server.listen(port, () => console.log(`Listening on port ${port}...`));