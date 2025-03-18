const {spawn} = require('node:child_process')
const vmstat = spawn('vmstat', ['1']);
var io = require('socket.io-client')
var socket = io.connect('http://localhost:3000', {reconnect: true})

socket.on('connect', (socket) => {
	console.log('Connected!')
})

vmstat.stdout.on('data', (data) => {
	//console.log(`${String(data)}`)
	socket.emit('CH01', 'me', String(data))
})

vmstat.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

vmstat.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
}); 

