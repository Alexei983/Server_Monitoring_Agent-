const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

log = ''

io.on('connection', function (socket){
   console.log('connection');

  socket.on('CH01', function (from, msg) {
	log = msg.replace(/\n/g, '')
	console.log(log)
  });

});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
