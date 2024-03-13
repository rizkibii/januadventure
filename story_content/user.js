function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62GcLf2tvlH":
        Script1();
        break;
      case "5nFUZWZrVw4":
        Script2();
        break;
      case "5dhWdsY7liu":
        Script3();
        break;
      case "6FE727Sdy6v":
        Script4();
        break;
      case "6a8EwQTZ9I8":
        Script5();
        break;
      case "5lN6JqycTTQ":
        Script6();
        break;
      case "6pVUaKIwgF8":
        Script7();
        break;
      case "5XDlkQhguUL":
        Script8();
        break;
      case "5Ut0UA2Sxtg":
        Script9();
        break;
      case "6k5eKrCR0T3":
        Script10();
        break;
      case "5uTzmDtdT0R":
        Script11();
        break;
      case "5j9dy98a1G2":
        Script12();
        break;
  }
}

function Script1()
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

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio2.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio1.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio4.mp3";
audio.load();
audio.play();
}

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio3.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

function Script12()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

