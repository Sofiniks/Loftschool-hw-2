const http = require('http');
require('dotenv').config();
const moment = require('moment');

const getDate = () => {
    return moment().format('DD.MM.YYYY, HH:mm:ss');
}

http
    .createServer(function (req, res) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Transfer-Encoding", "chunked");
        const intervalId = setInterval(() => {
            console.log(getDate());
        }, process.env.INTERVAL);

        setTimeout(() => {
            clearInterval(intervalId);
            console.log('End date ', getDate());
            res.write(getDate());
            res.end();
        }, process.env.STOP_TIME);
    })
    .listen(process.env.PORT);

console.log(`HTTP server running on port ${process.env.PORT}`);
