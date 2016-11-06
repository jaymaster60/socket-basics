	var socket= io();

	socket.on('connect', function(){

console.log('connected to socket.io server!');

});

socket.on('message',function(message){
	var momentTimestamp = moment.utc(message.timestamp);
console.log('new message: ');
console.log(message.text);

jQuery('.messages').append('<p><strong>' + momentTimestamp.local().format('HH:mm a') + ': </strong>' + message.text +'</p>')


});

//ha$ndles submitting of new message
var $form= jQuery('#message-form');

$form.on('submit', function(event){
event.preventDefault();
var $message= $form.find('input[name=message]');

socket.emit('message', {
text: $message.val()


});
// nach dem enter drücken, ist der Box wieder leer
$message.val('');

});