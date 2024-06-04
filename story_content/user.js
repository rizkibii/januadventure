function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6VkIDvWvTn2":
        Script1();
        break;
      case "5tFF63zI5u3":
        Script2();
        break;
      case "5os1ZLzjZvE":
        Script3();
        break;
      case "6At7xZYOaTW":
        Script4();
        break;
      case "5yU6xrRLIfl":
        Script5();
        break;
      case "5zt2SNo3BLW":
        Script6();
        break;
      case "6ShSI7fNjXv":
        Script7();
        break;
      case "6YJmwyeVb5Y":
        Script8();
        break;
      case "5WQgiArD1n0":
        Script9();
        break;
      case "6FZmcc2wsGK":
        Script10();
        break;
      case "5vM9hRC1w2Y":
        Script11();
        break;
      case "5cAkv18lEmL":
        Script12();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
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

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio2.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio1.mp3";
audio.load();
audio.play();
}

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio4.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio3.mp3";
audio.load();
audio.play();
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

