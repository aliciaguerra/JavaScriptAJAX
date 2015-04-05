//This is the client-side script.

//Initialize the AJAX request.
var xhr=new XMLHttpRequest();
x.hr.open('get', 'send-ajax-data.php');

//Trace the state changes of the request.
xhr.onreadystatechange=function(){
var DONE=4; //ReadyState4 means request is done.
var OK=200;//status 200 is a successful return.
if(xhr.readyState == DONE){
  alert(xhr.responseText); //this is the returned text
}
else{
  alert('Error:' +xhr.status); //An error occurred during the request.
}
}
};
//send the request to ajax-data.php
xhr.send(null);

