	var socket= io();

	socket.on('connect', function(){

console.log('connected to socket.io server!');

});

socket.on('message',function(message){
console.log('new message: ');
console.log(message.text);


});

//ha$ndles submitting of new message
var $form= jQuery('#message-form');

$form.on('submit', function(event){
event.preventDefault();
var $message= $form.find('input[name=message]');

socket.emit('message', {
text: $form.find('input[name=message]').val()


});
// nach dem enter drücken, ist der Box wieder leer
$message.val('');

});