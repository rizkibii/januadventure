window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

window.Script2 = function()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

}

window.Script3 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio2.mp3";
audio.load();
audio.play();
}

window.Script4 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio1.mp3";
audio.load();
audio.play();
}

window.Script5 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio4.mp3";
audio.load();
audio.play();
}

window.Script6 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio3.mp3";
audio.load();
audio.play();
}

window.Script7 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

window.Script8 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

window.Script9 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

window.Script10 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

window.Script11 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

window.Script12 = function()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

};
