var socket = io();
socket.on('connect', function () {
    console.log('connected to server');
   socket.emit('createMessage', {
       from: 'User2',
       text: 'im doint well'
   })
});

socket.on('newMessage', function (message){
    console.log('new message', message);
});
socket.on('disconnect', function () {
    console.log('disconnected from the server')
});




