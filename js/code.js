/*
*reference for funtions appear in this page
*/
//reference from w3schools

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '80%',
          videoId: 'E4rVgZ3FFYE',    // this is the end of the URL code
          events: {
            'onClick': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 600000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

function displayDate()
{
	document.getElementById("testDate").innerHTML=Date();
}

function text1()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("testingAjax1").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax/text1.txt",true);
xmlhttp.send();
}


function text2()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("testingAjax2").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax/text2.txt",true);
xmlhttp.send();
}

function text3()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("testingAjax3").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax/text3.txt",true);
xmlhttp.send();
}

function text4()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("testingAjax4").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax/text4.txt",true);
xmlhttp.send();
}

function text5()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("testingAjax5").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","ajax/text5.txt",true);
xmlhttp.send();
}


function WFB(){

var fburl = "http://graph.facebook.com/webbdevv.5/callback=?";

var url = "https://graph.facebook.com/100005743091347";

$(document).ready(function(){
	$.getJSON(url, function(data){
     	//var name = data["name"];
     	//var age = data["age"];
     	$("#profile").append("<h3>"+data["name"]+"</h3>");
     	//$("#profile").append("<h3>"+data["first_name"]+"</h3>");
     	//$("#profile").append("<h3>"+data["last_name"]+"</h3>");
     	$("#profile").append("<h3>"+data["link"]+"</h3>");
     	$("#profile").append("<h3>"+data["username"]+"</h3>");
     	//$("#profile").append("<h3>"+data["gender"]+"</h3>"); 
	});
});
}

//reference http://www.javascriptkit.com/script/script2/loginpass2.shtml  Variation of Login and Password script that will take users to a designated URL only if the entered username and password is correct
//var count = 2;
function validate() {
var count = 2;
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["Billy", "netgenovation", "Sarah", "Valerie"];  // as many as you like - no comma after final entry
var pwArray = ["Password1", "Password2", "Password3", "Password4"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
alert ("Login was successful");
window.location = "http://www.google.com";
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.  You have " + count + t + " left.");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

else {
alert ("Still incorrect! You have no more tries left!");
document.myform.username.value = "No more tries allowed!";
document.myform.pword.value = "";
document.myform.username.disabled = true;
document.myform.pword.disabled = true;
return false;
}

// this is the start of the stupid locator thst is not working

if (navigator && navigator.geolocation) {

	navigator.geolocation.getCurrentPosition(userLocated, locationError);

} else {
	error('positioning not supported.');
}


function userLocated(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var locateTime = new Date(position.timestamp);
	var locationDiv = document.getElementById("userLocation");
	locationDiv.innerHTML = "Your Location at time: " + locateTime + " is Lat: " + lat + " Long: " + long; 
}

function locationError(error) {
	var locationDiv = document.getElementById("userLocation");
	locationDiv.innerHTML = "Cannot Locate You due to the following error: " + error.code + " Message: " + error.message;
	//alert(error.code);
}



}

