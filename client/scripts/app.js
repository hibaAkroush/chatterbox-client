// YOUR CODE HERE:
// $.getJSON('http://parse.rbk.hackreactor.com/chatterbox/classess/messages', function (data) {
//     alert(data);
// });

// $("#btn").click(function(){
// 	var content = $("#textbox").val()
// 	alert(content)
// })




// // $("#btn").onclick(function(){
// 	alert("hiiiii")
// // })

var app = {
server :  "http://parse.rbk.hackreactor.com/chatterbox/classess/messages"
}

app.init = function(){

}

// app.server = function(){
// 	return  "http://parse.rbk.hackreactor.com/chatterbox/classess/messages"
// }
var x =  window.location.search.split("=")[1]

app.send = function(x){
$.ajax({
data:x,
type: 'POST',
});
		
}


app.fetch=function(){
$.ajax({
url : "http://parse.rbk.hackreactor.com/chatterbox/classess/messages",

})
	
}

app.clearMessages = function(){
	$('#chats').children().remove()
}

app.renderMessage = function(message){
	$('#chats').append( "<p>message</p>" )
}
app.renderRoom=function()
{
	$('#roomSelect').append("<p>roommmmmm</p>")

}
app.handleUsernameClick=function(){

}

$(".username").click(app.handleUsernameClick)

// var $messages= $("#chats")
// var $user_name = window.location.search.split("=")[1]
// var $chat_room = $("#roomSelect")

// $.ajax({
// 	type: 'GET',
// 	url: 'http://parse.rbk.hackreactor.com/chatterbox/classess/messages',
// 	sucess: function(messages){
// 		$.each(messages, function(i,element){
// 			$messages.append('<li>' + element.username + ":" /n + element.text + '</li>')
// 		})
// 	}

// $("#btn").click(function(){
// 	var message = {
// 		username: $user_name
// 		text: $message.val()
// 		roomname: $chat_room
// 	}
// })

// })





